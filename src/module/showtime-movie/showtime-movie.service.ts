import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMultiShowTimeMovieDto } from './dto/create-multi-showtime-movie.dto';
import { CreateShowTimeMovieDto } from './dto/create-showtime-movie.dto';
import { GetShowTimeMovieDto } from './dto/get-showtime-movie.dto';
import { UpdateShowTimeMovieDto } from './dto/update-showtime-movie.dto';

@Injectable()
export class ShowtimeMovieService {
  constructor(private prisma: PrismaService) {}

  async createShowtimeMovie(createShowTimeMovieDto: CreateShowTimeMovieDto) {
    const data = await this.prisma.showtimesMovie.create({
      data: { ...createShowTimeMovieDto, deleteFlg: false },
    });
    return { status: 200, data };
  }

  async createMultiShowtimeMovie(
    createMultiShowTimeMovieDto: CreateMultiShowTimeMovieDto,
  ) {
    const dataRoomFormat = createMultiShowTimeMovieDto.idRoom.map(
      (e: number) => {
        return {
          idRoom: e,
          idMovie: createMultiShowTimeMovieDto.idMovie,
          timeStart: createMultiShowTimeMovieDto.timeStart,
          timeEnd: createMultiShowTimeMovieDto.timeEnd,
          price: createMultiShowTimeMovieDto.price,
          deleteFlg: false,
        };
      },
    );
    const data = await this.prisma.showtimesMovie.createMany({
      data: dataRoomFormat,
      skipDuplicates: true,
    });
    return { status: 200, data };
  }

  async getShowtimeMovie(getShowTimeMovieDto: GetShowTimeMovieDto) {
    const data = await this.prisma.showtimesMovie.findMany({
      where: {
        deleteFlg: false,
      },
      orderBy: {
        updatedAt: 'desc',
      },
      skip: getShowTimeMovieDto.skip,
      take: getShowTimeMovieDto.take,
    });
    const page = await this.prisma.showtimesMovie.findMany({
      where: { deleteFlg: false },
    });
    return {
      status: 200,
      data,
      count: page.length,
      page: getShowTimeMovieDto.take
        ? Math.floor(page.length / getShowTimeMovieDto.take) + 1
        : Math.floor(page.length / 10) + 1,
    };
  }
  async getShowtimeMovieById(id: number) {
    const data = await this.prisma.showtimesMovie.findFirst({
      where: { id },
    });
    return { status: 200, data };
  }
  async updateShowtimeMovie(
    id: number,
    updateShowTimeMovieDto: UpdateShowTimeMovieDto,
  ) {
    const data = await this.prisma.showtimesMovie.update({
      where: { id },
      data: { ...updateShowTimeMovieDto },
    });
    return { status: 200, data };
  }

  async deleteShowtimeMovie(id: number) {
    const data = await this.prisma.showtimesMovie.update({
      where: { id },
      data: { deleteFlg: true },
    });
    return { status: 200, data };
  }

  async unDeleteShowtimeMovie(id: number) {
    const data = await this.prisma.showtimesMovie.update({
      where: { id },
      data: { deleteFlg: false },
    });
    return { status: 200, data };
  }
}
