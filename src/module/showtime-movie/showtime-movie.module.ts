import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { ShowtimeMovieController } from './showtime-movie.controller';
import { ShowtimeMovieService } from './showtime-movie.service';

@Module({
  controllers: [ShowtimeMovieController],
  providers: [ShowtimeMovieService],
  imports: [PrismaModule],
})
export class ShowtimeMovieModule {}
