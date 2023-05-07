import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Body,
  UploadedFiles,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadFileService } from './upload-file.service';
import { Express, Response } from 'express';
import { UpLoadFileDto } from './dto/upload-dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import {
  ApiMultiFile,
  editFileName,
  imageFileFilter,
} from './entity/FormatUploadFiles';
import { diskStorage } from 'multer';

@Controller('upload-file')
@ApiTags('upload-file')
export class UploadFileController {
  constructor(private uploadFileService: UploadFileService) {}

  @Get('/get-file/:filename')
  async getFile(@Param('filename') filename: any, @Res() res: Response) {
    res.sendFile(filename, { root: './files' });
  }

  @Post()
  // s3
  // @ApiConsumes('multipart/form-data')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(
  //   @Body() data: UpLoadFileDto,
  //   @UploadedFile() file: Express.Multer.File,
  // ): Promise<any> {
  //   return await this.uploadFileService.uploadFile(
  //     file.buffer,
  //     file.originalname,
  //   );
  // }

  //local
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiConsumes('multipart/form-data')
  // @UseInterceptors(
  //   FilesInterceptor('file', 1, {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )
  // @UseInterceptors(
  //   FilesInterceptor('file', 1, {
  //     storage: diskStorage({
  //       destination: './files',
  //       filename: editFileName,
  //     }),
  //     fileFilter: imageFileFilter,
  //   }),
  // )
  @UseInterceptors(FileInterceptor('file'))
  uploadFile2(@UploadedFile('file') file) {
    console.log(file);
  }

  @Post('upload-multi')
  @ApiConsumes('multipart/form-data')
  @ApiMultiFile()
  @UseInterceptors(
    FilesInterceptor('file', 5, {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadMultipleFiles(
    @UploadedFiles()
    files: any,
  ) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        originalname: file.originalname,
        url: `http://localhost:8000/upload-file/get-file/${file.filename}`,
      };
      response.push(fileReponse);
    });
    return { status: 200, data: response };
  }
}
