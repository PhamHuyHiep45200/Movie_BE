import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetShowTimeMovieDto {
  @ApiProperty()
  @IsString()
  time: string;
}
