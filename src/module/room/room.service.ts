import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomDto } from './dto/get-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async createRoom(createRoomDto: CreateRoomDto) {
    const room = await this.prisma.room.create({
      data: {
        name: createRoomDto.name,
        numberChair: createRoomDto.numberChair,
        deleteFlg: false,
      },
    });
    return { status: 200, data: room };
  }
  async getRoom(getRoomDto: GetRoomDto) {
    const room = await this.prisma.room.findMany({
      where: {
        name: {
          contains: getRoomDto.name,
        },
      },
      skip: getRoomDto.skip,
      take: getRoomDto.take,
    });
    return {
      status: 200,
      data: room,
      page: getRoomDto.take
        ? Math.floor(room.length / getRoomDto.take) + 1
        : Math.floor(room.length / 10) + 1,
    };
  }
  async updateRoom(id: number, updateRoomDto: UpdateRoomDto) {
    const room = await this.prisma.room.update({
      where: {
        id: id,
      },
      data: {
        name: updateRoomDto.name,
      },
    });
    return { status: 200, data: room };
  }
  async DeleteRoom(id: number) {
    const room = await this.prisma.room.update({
      where: {
        id: id,
      },
      data: {
        deleteFlg: true,
      },
    });
    return { status: 200, data: room };
  }
  async unDeleteRoom(id: number) {
    const room = await this.prisma.room.update({
      where: {
        id: id,
      },
      data: {
        deleteFlg: false,
      },
    });
    return { status: 200, data: room };
  }
}
