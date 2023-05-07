import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { BookMovieController } from './book-movie.controller';
import { BookMovieService } from './book-movie.service';

@Module({
  controllers: [BookMovieController],
  providers: [BookMovieService],
  imports: [PrismaModule],
})
export class BookMovieModule {}
