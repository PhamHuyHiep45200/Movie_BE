import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { UploadedFile, UploadedFiles } from '@nestjs/common/decorators';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiConsumes } from '@nestjs/swagger';
import { UpLoadFileMutipleDto } from './dto/upload-mutiple.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}
  @Post('/upload-mutiple')
  @ApiConsumes('multipart/form-data')
  // @ApiMultiFile()
  @UseInterceptors(FilesInterceptor('files'))
  uploadMultipleFiles(
    @Body() data: UpLoadFileMutipleDto,
    @UploadedFiles() files: any,
  ) {
    return { files, data };
  }
}
