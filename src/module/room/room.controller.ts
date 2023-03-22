import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { GetRoomDto } from './dto/get-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { RoomService } from './room.service';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}
  @Post()
  createRoom(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.createRoom(createRoomDto);
  }
  @Get()
  getRoom(@Query() getRoomDto: GetRoomDto) {
    return this.roomService.getRoom(getRoomDto);
  }
  @Put('/:id')
  updateRoom(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomService.updateRoom(id, updateRoomDto);
  }
  @Put('/delete/:id')
  DeleteRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.DeleteRoom(id);
  }
  @Put('/unDelete/:id')
  unDeleteRoom(@Param('id', ParseIntPipe) id: number) {
    return this.roomService.unDeleteRoom(id);
  }
}
