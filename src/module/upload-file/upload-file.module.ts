import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma.module';
import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  controllers: [UploadFileController],
  providers: [UploadFileService],
  imports: [PrismaModule],
})
export class UploadFileModule {}
