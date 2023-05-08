import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class GetMovieDto {
  @Optional()
  @IsOptional()
  @ApiProperty({ required: false })
  nameMovie: string;

  @IsOptional()
  @Optional()
  @ApiProperty({ required: false })
  author: string;

  @IsOptional()
  @Optional()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  skip: number;

  @IsOptional()
  @Optional()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  take: number;

  @IsOptional()
  @Optional()
  @Transform(({ value }) => {
    if (value) {
      return value;
    }
    return false;
  })
  @ApiProperty({ required: false })
  deleteFlg: boolean;
}
