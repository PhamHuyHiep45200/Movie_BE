import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateShowTimeMovieDto } from './dto/create-showtime-movie.dto';
import { GetShowTimeMovieDto } from './dto/get-showtime-movie.dto';
import { UpdateShowTimeMovieDto } from './dto/update-showtime-movie.dto';

@Injectable()
export class ShowtimeMovieService {
  constructor(private prisma: PrismaService) {}

  async createShowtimeMovie(createShowTimeMovieDto: CreateShowTimeMovieDto) {
    const data = await this.prisma.showtimes.create({
      data: {
        time: createShowTimeMovieDto.time,
        scheduledFare: createShowTimeMovieDto.scheduledFare,
        deleteFlg: false,
        ShowtimesMovie: {
          create: {
            idMovie: createShowTimeMovieDto.idMovie,
          },
        },
      },
    });
    return { status: 200, data };
  }

  async getShowtimeMovie(getShowTimeMovieDto: GetShowTimeMovieDto) {
    const data = await this.prisma.showtimes.findMany({
      where: {
        deleteFlg: false,
        time: { contains: getShowTimeMovieDto.time },
      },
      orderBy: {
        updatedAt: 'desc',
      },
      skip: getShowTimeMovieDto.skip,
      take: getShowTimeMovieDto.take,
    });
    return { status: 200, data };
  }

  async updateShowtimeMovie(
    id: number,
    updateShowTimeMovieDto: UpdateShowTimeMovieDto,
  ) {
    const data = await this.prisma.showtimes.update({
      where: { id },
      data: { ...updateShowTimeMovieDto },
    });
    return { status: 200, data };
  }

  async deleteShowtimeMovie(id: number) {
    const data = await this.prisma.showtimes.update({
      where: { id },
      data: { deleteFlg: true },
    });
    return { status: 200, data };
  }

  async unDeleteShowtimeMovie(id: number) {
    const data = await this.prisma.showtimes.update({
      where: { id },
      data: { deleteFlg: false },
    });
    return { status: 200, data };
  }
}
