import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

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
  @IsDate()
  @IsOptional()
  timeStart: Date;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  timeEnd: Date;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  price: number;
}
