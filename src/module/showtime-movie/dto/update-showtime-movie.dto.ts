import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class UpdateShowTimeMovieDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  time: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  scheduledFare: number;
}
