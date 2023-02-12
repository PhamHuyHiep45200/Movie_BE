import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [PrismaModule],
})
export class MovieModule {}
