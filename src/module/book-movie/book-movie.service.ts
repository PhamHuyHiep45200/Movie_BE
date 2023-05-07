import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateBookMovieDto } from './dto/create-bookMovie.dto';
import { GetBookMovieDto } from './dto/get-bookMovie.dto';
import { UpdateBookMovieDto } from './dto/update-bookMovie.dto';

@Injectable()
export class BookMovieService {
  constructor(private prisma: PrismaService) {}
  async getBookMovieData(queryBookMovie: GetBookMovieDto) {
    const data = await this.prisma.bookMovie.findMany({
      where: {
        deleteFlg: false,
        status: queryBookMovie.status,
      },
      skip: queryBookMovie.skip,
      take: queryBookMovie.take,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    const page = await this.prisma.bookMovie.findMany({
      where: { deleteFlg: false },
    });
    return {
      status: 200,
      data,
      count: page.length,
      page: queryBookMovie.take
        ? Math.floor(page.length / queryBookMovie.take) + 1
        : Math.floor(page.length / 10) + 1,
    };
  }
  async getBookMovieByIdData(id: number) {
    const data = await this.prisma.bookMovie.findFirst({
      where: {
        id,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async createBookMovieData(createBookMovie: CreateBookMovieDto) {
    const data = await this.prisma.bookMovie.create({
      data: {
        ...createBookMovie,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async updateBookMovieData(id: number, updateBookMovie: UpdateBookMovieDto) {
    const data = await this.prisma.bookMovie.update({
      where: {
        id,
      },
      data: updateBookMovie,
    });
    return { data, status: 200 };
  }
  async deleteBookMovie(id: number) {
    const data = await this.prisma.bookMovie.update({
      where: {
        id,
      },
      data: {
        deleteFlg: true,
      },
    });
    return { data, status: 200 };
  }
  async unDeleteBookMovie(id: number) {
    const data = await this.prisma.bookMovie.update({
      where: {
        id,
      },
      data: {
        deleteFlg: false,
      },
    });
    return { data, status: 200 };
  }
}
