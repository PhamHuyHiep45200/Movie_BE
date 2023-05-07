import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  Put,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateShowTimeMovieDto } from './dto/create-showtime-movie.dto';
import { GetShowTimeMovieDto } from './dto/get-showtime-movie.dto';
import { UpdateShowTimeMovieDto } from './dto/update-showtime-movie.dto';
import { ShowtimeMovieService } from './showtime-movie.service';

@Controller('showtime-movie')
@ApiTags('showtime-movie')
export class ShowtimeMovieController {
  constructor(private showtimeMovieService: ShowtimeMovieService) {}

  @Post()
  createShowtimeMovie(@Body() createShowTimeMovieDto: CreateShowTimeMovieDto) {
    return this.showtimeMovieService.createShowtimeMovie(
      createShowTimeMovieDto,
    );
  }

  @Get()
  getShowtimeMovie(@Query() getShowTimeMovieDto: GetShowTimeMovieDto) {
    return this.showtimeMovieService.getShowtimeMovie(getShowTimeMovieDto);
  }

  @Get('/:id')
  getShowtimeMovieById(@Param('id', ParseIntPipe) id: number) {
    return this.showtimeMovieService.getShowtimeMovieById(id);
  }

  @Put('/update/:id')
  updateShowtimeMovie(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateShowTimeMovieDto: UpdateShowTimeMovieDto,
  ) {
    return this.showtimeMovieService.updateShowtimeMovie(
      id,
      updateShowTimeMovieDto,
    );
  }

  @Put('/delete/:id')
  deleteShowtimeMovie(@Param('id', ParseIntPipe) id: number) {
    return this.showtimeMovieService.deleteShowtimeMovie(id);
  }

  @Put('/un-delete/:id')
  unDeleteShowtimeMovie(@Param('id', ParseIntPipe) id: number) {
    return this.showtimeMovieService.unDeleteShowtimeMovie(id);
  }
}
