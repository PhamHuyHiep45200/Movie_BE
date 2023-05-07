import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCalendarMovieDto {
  @ApiProperty()
  @IsNumber()
  idRoom: number;

  @ApiProperty()
  @IsNumber()
  idMovie: string;

  @ApiProperty()
  @IsString()
  time: string;

  @ApiProperty()
  @IsNumber()
  scheduledFare: number;

  @ApiProperty()
  @IsString()
  name: string;
}
