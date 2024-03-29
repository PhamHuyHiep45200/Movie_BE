import { ApiProperty } from '@nestjs/swagger';

export class UploadMultiDto {
  @ApiProperty({ type: 'string', format: 'binary', required: true })
  file: Express.Multer.File;
}
