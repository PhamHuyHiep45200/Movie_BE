import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @ApiProperty()
  @IsNumber()
  timeMovie: number;

  @ApiProperty()
  @IsNumber()
  movieCategoryId: number;

  @ApiProperty()
  thumbnail: string[];

  @ApiProperty({ default: false })
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
  // @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  // files: any[];
}
