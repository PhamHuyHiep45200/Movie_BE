import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Query,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMovieDto } from './dto/get-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
@ApiTags('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post('/upload-movie')
  createMovie(@Body() data: CreateMovieDto) {
    return this.movieService.createMovie(data);
  }

  @Get()
  getMovie(@Query() getMovieDto: GetMovieDto) {
    return this.movieService.getMovie(getMovieDto);
  }

  @Put('/update/:id')
  updateMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMoviedto: UpdateMovieDto,
  ) {
    return this.movieService.updateMovieService(id, updateMoviedto);
  }

  @Put('/delete/:id')
  deleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.delete(id);
  }

  @Put('/un-delete/:id')
  unDeleteMovie(@Param('id', ParseIntPipe) id: number) {
    return this.movieService.unDelete(id);
  }
}
