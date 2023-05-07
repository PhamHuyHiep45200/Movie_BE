import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateShowTimeMovieDto {
  @ApiProperty()
  @IsNumber()
  idRoom: number;
  @ApiProperty()
  @IsNumber()
  idMovie: number;
  @ApiProperty()
  @IsDate()
  timeStart: Date;
  @ApiProperty()
  @IsDate()
  timeEnd: Date;
  @ApiProperty()
  @IsNumber()
  price: number;
  @ApiProperty()
  @IsString()
  @IsOptional()
  deleteFlg?: string;
}
