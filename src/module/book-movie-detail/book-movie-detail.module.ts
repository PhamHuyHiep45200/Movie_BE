import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { BookMovieDetailDetailController } from './book-movie-detail.controller';
import { BookMovieDetailDetailService } from './book-movie-detail.service';

@Module({
  providers: [BookMovieDetailDetailService],
  controllers: [BookMovieDetailDetailController],
  imports: [PrismaModule],
})
export class BookMovieDetailModule {}
