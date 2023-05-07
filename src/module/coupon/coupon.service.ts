import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCouponDto } from './dto/create-coupon.dto';
import { GetCouponDto } from './dto/get-coupon.dto';
import { UpdateCouponDto } from './dto/update-coupon.dto';

@Injectable()
export class CouponService {
  constructor(private prisma: PrismaService) {}
  async getCouponData(queryCoupon: GetCouponDto) {
    const data = await this.prisma.coupon.findMany({
      where: {
        deleteFlg: false,
        name: {
          contains: queryCoupon.name,
        },
      },
      skip: queryCoupon.skip,
      take: queryCoupon.take,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    const page = await this.prisma.coupon.findMany({
      where: { deleteFlg: false },
    });
    return {
      status: 200,
      data,
      count: page.length,
      page: queryCoupon.take
        ? Math.floor(page.length / queryCoupon.take) + 1
        : Math.floor(page.length / 10) + 1,
    };
  }
  async getCouponByIdData(id: number) {
    const data = await this.prisma.coupon.findFirst({
      where: {
        id,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async createCouponData(createCoupon: CreateCouponDto) {
    const data = await this.prisma.coupon.create({
      data: {
        ...createCoupon,
        deleteFlg: false,
        code: `${Math.floor(Math.random() * 1000)}_${Math.floor(
          Math.random() * 1000,
        )}`,
      },
    });
    return { status: 200, data };
  }
  async updateCouponData(id: number, updateCoupon: UpdateCouponDto) {
    const data = await this.prisma.coupon.update({
      where: {
        id,
      },
      data: updateCoupon,
    });
    return { data, status: 200 };
  }
  async deleteCoupon(id: number) {
    const data = await this.prisma.coupon.update({
      where: {
        id,
      },
      data: {
        deleteFlg: true,
      },
    });
    return { data, status: 200 };
  }
  async unDeleteCoupon(id: number) {
    const data = await this.prisma.coupon.update({
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
