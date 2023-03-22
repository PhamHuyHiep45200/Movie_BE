import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { PrismaService } from 'src/prisma.service';
import { GetMovieDto } from './dto/get-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  constructor(private prisma: PrismaService) {}
  async createMovie(createMovieDto: CreateMovieDto) {
    const data = await this.prisma.movie.create({
      data: { ...createMovieDto },
    });
    return {
      status: 200,
      data,
    };
  }
  async getMovie(getMovie: GetMovieDto) {
    const data = await this.prisma.movie.findMany({
      where: {
        deleteFlg: getMovie.deleteFlg,
        author: { contains: getMovie.author },
        nameMovie: { contains: getMovie.nameMovie },
      },
      include: {
        movieCategory: true,
        ShowtimesMovie: { include: { showTime: true } },
      },
      skip: getMovie.skip,
      take: getMovie.take,
      orderBy: { updatedAt: 'desc' },
    });
    const page = await this.prisma.movie.count();
    return {
      status: 200,
      data,
      page: getMovie.take
        ? Math.floor(page / getMovie.take) + 1
        : Math.floor(page / 10) + 1,
    };
  }
  async updateMovieService(id: number, updateMoviedto: UpdateMovieDto) {
    const data = await this.prisma.movie.update({
      where: { id },
      data: { ...updateMoviedto },
    });
    return { status: 200, data };
  }
  async delete(id: number) {
    const data = await this.prisma.movie.update({
      data: {
        deleteFlg: true,
      },
      where: { id },
    });
    return { status: 200, data };
  }
  async unDelete(id: number) {
    const data = await this.prisma.movie.update({
      data: {
        deleteFlg: false,
      },
      where: { id },
    });
    return { status: 200, data };
  }
}
