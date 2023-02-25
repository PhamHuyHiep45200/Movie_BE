import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateShowTimeMovieDto {
  @ApiProperty()
  @IsString()
  time: string;

  @ApiProperty()
  @IsNumber()
  scheduledFare: number;

  @ApiProperty()
  @IsNumber()
  idMovie: number;
}
