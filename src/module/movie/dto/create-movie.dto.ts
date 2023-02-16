import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty()
  @IsString()
  nameMovie: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  author: string;

  @ApiProperty({ type: 'string', format: 'binary', required: true })
  thumbnail: Express.Multer.File[];

  @ApiProperty()
  @IsNumber()
  timeMovie: number;
}
