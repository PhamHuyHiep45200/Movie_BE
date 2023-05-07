import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomDto } from './dto/get-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async getRoomData(queryRoom: GetRoomDto) {
    const data = await this.prisma.room.findMany({
      where: {
        deleteFlg: false,
        name: {
          contains: queryRoom.name,
        },
      },
      skip: queryRoom.skip,
      take: queryRoom.take,
      orderBy: {
        updatedAt: 'desc',
      },
    });
    const page = await this.prisma.room.findMany({
      where: { deleteFlg: false },
    });
    return {
      status: 200,
      data,
      count: page.length,
      page: queryRoom.take
        ? Math.floor(page.length / queryRoom.take) + 1
        : Math.floor(page.length / 10) + 1,
    };
  }
  async getRoomByIdData(id: number) {
    const data = await this.prisma.room.findFirst({
      where: {
        id,
        deleteFlg: false,
      },
    });
    return { status: 200, data };
  }
  async createRoomData(createRoom: CreateRoomDto) {
    const data = await this.prisma.room.create({
      data: { ...createRoom, deleteFlg: false },
    });
    return { status: 200, data };
  }
  async updateRoomData(id: number, updateRoom: UpdateRoomDto) {
    const data = await this.prisma.room.update({
      where: {
        id,
      },
      data: updateRoom,
    });
    return { data, status: 200 };
  }
  async deleteRoom(id: number) {
    const data = await this.prisma.room.update({
      where: {
        id,
      },
      data: {
        deleteFlg: true,
      },
    });
    return { data, status: 200 };
  }
  async unDeleteRoom(id: number) {
    const data = await this.prisma.room.update({
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
