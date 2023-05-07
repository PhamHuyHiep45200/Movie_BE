import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateBookMovieDetailDto } from './dto/create-bookMovieDetail.dto';
import { GetBookMovieDetailDto } from './dto/get-bookMovieDetail.dto';
import { UpdateBookMovieDetailDto } from './dto/update-bookMovieDetail.dto';

@Injectable()
export class BookMovieDetailDetailService {
  constructor(private prisma: PrismaService) {}
  async getBookMovieDetailData(queryBookMovieDetail: GetBookMovieDetailDto) {
    const data = await this.prisma.bookMovieDetail.findMany({
      where: {
        deleteFlg: false,
      },
      skip: queryBookMovieDetail.skip,
      take: queryBookMovieDetail.take,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    const page = await this.prisma.bookMovieDetail.findMany({
      where: { deleteFlg: false },
    });
    return {
      status: 200,
      data,
      count: page.length,
      page: queryBookMovieDetail.take
        ? Math.floor(page.length / queryBookMovieDetail.take) + 1
        : Math.floor(page.length / 10) + 1,
    };
  }
  async getBookMovieDetailByIdData(id: number) {
    const data = await this.prisma.bookMovieDetail.findFirst({
      where: {
        id,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async createBookMovieDetailData(
    createBookMovieDetail: CreateBookMovieDetailDto,
  ) {
    const data = await this.prisma.bookMovieDetail.create({
      data: {
        ...createBookMovieDetail,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async updateBookMovieDetailData(
    id: number,
    updateBookMovieDetail: UpdateBookMovieDetailDto,
  ) {
    const data = await this.prisma.bookMovieDetail.update({
      where: {
        id,
      },
      data: updateBookMovieDetail,
    });
    return { data, status: 200 };
  }
  async deleteBookMovieDetail(id: number) {
    const data = await this.prisma.bookMovieDetail.update({
      where: {
        id,
      },
      data: {
        deleteFlg: true,
      },
    });
    return { data, status: 200 };
  }
  async unDeleteBookMovieDetail(id: number) {
    const data = await this.prisma.bookMovieDetail.update({
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
