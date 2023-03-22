import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateSlide } from './dto/create-slide.dto';
import { UpdateSlide } from './dto/update-slide.dto';

@Injectable()
export class SlideService {
  constructor(private prisma: PrismaService) {}
  async createSlide(createSlide: CreateSlide[]) {
    const data = await this.prisma.slide.createMany({
      data: [...createSlide],
    });
    return { status: 200, data };
  }

  async getSlide() {
    const data = await this.prisma.slide.findMany({
      orderBy: { id: 'desc' },
    });
    return { status: 200, data };
  }

  async updateSlide(id, updateSlide: UpdateSlide) {
    const data = await this.prisma.slide.update({
      where: {
        id,
      },
      data: { ...updateSlide, deleteFlg: false },
    });
    return { status: 200, data };
  }

  async deleteSlide(id: number) {
    const data = await this.prisma.slide.delete({
      where: {
        id,
      },
    });
    return { status: 200, data };
  }
}
