import { Module } from '@nestjs/common';
import { BookMovieDetailService } from './book-movie-detail.service';
import { BookMovieDetailController } from './book-movie-detail.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  providers: [BookMovieDetailService],
  controllers: [BookMovieDetailController],
  imports: [PrismaModule],
})
export class BookMovieDetailModule {}
