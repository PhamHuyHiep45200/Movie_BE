import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetBookMovieDetailDto {
  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  skip?: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Transform(({ value }) => +value)
  @IsOptional()
  take?: number;
}
