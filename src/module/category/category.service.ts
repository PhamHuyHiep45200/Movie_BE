import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { GetCategoryDto } from './dto/get-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async getCategory(getCategoryDto: GetCategoryDto) {
    const data = await this.prisma.movieCategory.findMany({
      where: {
        deleteFlg: getCategoryDto.deleteFlg,
        name: {
          contains: getCategoryDto.name,
        },
      },
      orderBy: { updatedAt: 'desc' },
    });
    return {
      status: 200,
      data,
    };
  }
  async createCategory(createCategoryDto: CreateCategoryDto) {
    const data = await this.prisma.movieCategory.create({
      data: { ...createCategoryDto, deleteFlg: false },
    });
    return { status: 200, data };
  }
  async updateCategory(
    id_category: number,
    updateCategoryDto: UpdateCategoryDto,
  ) {
    const data = await this.prisma.movieCategory.update({
      where: { id: id_category },
      data: { ...updateCategoryDto },
    });
    return { status: 200, data };
  }
  async deleteCategory(id_category: number) {
    const data = await this.prisma.movieCategory.update({
      where: { id: id_category },
      data: { deleteFlg: true },
    });
    return { status: 200, data };
  }
  async unDeleteCategory(id_category: number) {
    const data = await this.prisma.movieCategory.update({
      where: { id: id_category },
      data: { deleteFlg: false },
    });
    return { status: 200, data };
  }
}
