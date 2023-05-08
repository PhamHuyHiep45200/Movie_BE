import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMultiShowTimeMovieDto {
  @ApiProperty()
  @IsNumber({}, { each: true })
  idRoom: number[];
  @ApiProperty()
  @IsNumber()
  idMovie: number;
  @ApiProperty()
  @IsDateString()
  timeStart: Date;
  @ApiProperty()
  @IsDateString()
  timeEnd: Date;
  @ApiProperty()
  @IsNumber()
  price: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  deleteFlg?: string;
}
