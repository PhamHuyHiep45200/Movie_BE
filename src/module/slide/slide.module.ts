import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { SlideController } from './slide.controller';
import { SlideService } from './slide.service';

@Module({
  controllers: [SlideController],
  providers: [SlideService],
  imports: [PrismaModule],
})
export class SlideModule {}
