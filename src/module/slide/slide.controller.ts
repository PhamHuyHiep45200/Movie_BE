import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateSlide } from './dto/create-slide.dto';
import { UpdateSlide } from './dto/update-slide.dto';
import { SlideService } from './slide.service';

@Controller('slide')
@ApiTags('slide')
export class SlideController {
  constructor(private slideService: SlideService) {}

  @Post()
  createSlide(@Body() createSlide: CreateSlide) {
    return this.slideService.createSlide(createSlide);
  }
  @Get()
  getSlide() {
    return this.slideService.getSlide();
  }
  @Put('/:id')
  updateSlide(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSlide: UpdateSlide,
  ) {
    return this.slideService.updateSlide(id, updateSlide);
  }
  @Delete('/:id')
  deleteSlide(@Param('id', ParseIntPipe) id: number) {
    return this.slideService.deleteSlide(id);
  }
}
