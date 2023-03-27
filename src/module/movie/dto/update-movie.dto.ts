import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMovieDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  nameMovie: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  author: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  timeMovie: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  category: number;

  @ApiProperty()
  @IsOptional()
  thumbnail: string[];

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
  // @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  // files: any[];
}
