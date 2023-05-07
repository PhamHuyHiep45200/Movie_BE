import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomDto } from './dto/get-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';

@ApiTags('room')
@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Get()
  getRoom(@Query() queryRoom: GetRoomDto) {
    return this.roomService.getRoomData(queryRoom);
  }

  @Get('/:id')
  getRoomById(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.getRoomByIdData(id);
  }

  @Post()
  createRoom(@Body() createRoom: CreateRoomDto) {
    return this.roomService.createRoomData(createRoom);
  }

  @Put('/:id')
  updateRoom(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoom: UpdateRoomDto,
  ) {
    return this.roomService.updateRoomData(id, updateRoom);
  }

  @Put('/delete/:id')
  deleteRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.deleteRoom(id);
  }

  @Put('/un-delete/:id')
  unDeleteRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.unDeleteRoom(id);
  }
}
