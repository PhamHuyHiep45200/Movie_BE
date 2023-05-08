import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class GetShowTimeMovieDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  price: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  timeStart: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDateString()
  timeEnd: Date;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  skip: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  @Transform(({ value }) => +value)
  take: number;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;
}
