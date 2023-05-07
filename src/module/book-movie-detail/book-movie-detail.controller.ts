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
import { ApiTags } from '@nestjs/swagger';
import { BookMovieDetailDetailService } from './book-movie-detail.service';
import { CreateBookMovieDetailDto } from './dto/create-bookMovieDetail.dto';
import { GetBookMovieDetailDto } from './dto/get-bookMovieDetail.dto';
import { UpdateBookMovieDetailDto } from './dto/update-bookMovieDetail.dto';

@ApiTags('book-movie-detail')
@Controller('book-movie-detail')
export class BookMovieDetailDetailController {
  constructor(private bookMovieDetailService: BookMovieDetailDetailService) {}
  @Get()
  getBookMovieDetail(@Query() queryBookMovieDetail: GetBookMovieDetailDto) {
    return this.bookMovieDetailService.getBookMovieDetailData(
      queryBookMovieDetail,
    );
  }

  @Get('/:id')
  getBookMovieDetailById(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieDetailService.getBookMovieDetailByIdData(id);
  }

  @Post()
  createBookMovieDetail(
    @Body() createBookMovieDetail: CreateBookMovieDetailDto,
  ) {
    return this.bookMovieDetailService.createBookMovieDetailData(
      createBookMovieDetail,
    );
  }

  @Put('/:id')
  updateBookMovieDetail(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookMovieDetail: UpdateBookMovieDetailDto,
  ) {
    return this.bookMovieDetailService.updateBookMovieDetailData(
      id,
      updateBookMovieDetail,
    );
  }

  @Put('/delete/:id')
  deleteBookMovieDetail(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieDetailService.deleteBookMovieDetail(id);
  }

  @Put('/un-delete/:id')
  unDeleteBookMovieDetail(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieDetailService.unDeleteBookMovieDetail(id);
  }
}
