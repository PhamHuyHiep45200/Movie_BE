import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadFileService } from './upload-file.service';
import { Express } from 'express';
import { UpLoadFileDto } from './dto/upload-dto';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';

@Controller('upload-file')
@ApiTags('upload-file')
export class UploadFileController {
  constructor(private uploadFileService: UploadFileService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(
    @Body() data: UpLoadFileDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    return await this.uploadFileService.uploadFile(
      file.buffer,
      file.originalname,
    );
  }
}
