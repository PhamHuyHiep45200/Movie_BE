import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDate, IsNumber, IsOptional } from 'class-validator';

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
  @IsDate()
  timeStart: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
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
