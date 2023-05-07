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
import { BookMovieService } from './book-movie.service';
import { CreateBookMovieDto } from './dto/create-bookMovie.dto';
import { GetBookMovieDto } from './dto/get-bookMovie.dto';
import { UpdateBookMovieDto } from './dto/update-bookMovie.dto';

@ApiTags('book-movie')
@Controller('book-movie')
export class BookMovieController {
  constructor(private bookMovieService: BookMovieService) {}
  @Get()
  getBookMovie(@Query() queryBookMovie: GetBookMovieDto) {
    return this.bookMovieService.getBookMovieData(queryBookMovie);
  }

  @Get('/:id')
  getBookMovieById(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieService.getBookMovieByIdData(id);
  }

  @Post()
  createBookMovie(@Body() createBookMovie: CreateBookMovieDto) {
    return this.bookMovieService.createBookMovieData(createBookMovie);
  }

  @Put('/:id')
  updateBookMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBookMovie: UpdateBookMovieDto,
  ) {
    return this.bookMovieService.updateBookMovieData(id, updateBookMovie);
  }

  @Put('/delete/:id')
  deleteBookMovie(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieService.deleteBookMovie(id);
  }

  @Put('/un-delete/:id')
  unDeleteBookMovie(@Param('id', ParseIntPipe) id: number) {
    return this.bookMovieService.unDeleteBookMovie(id);
  }
}
