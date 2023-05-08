import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDateString } from 'class-validator';

export class UpdateShowTimeMovieDto {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  idRoom: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  idMovie: number;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  timeStart: Date;

  @ApiProperty()
  @IsDateString()
  @IsOptional()
  timeEnd: Date;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;
}
