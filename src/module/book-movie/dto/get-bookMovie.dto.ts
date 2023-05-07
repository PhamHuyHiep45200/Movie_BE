import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class GetBookMovieDto {
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  status: boolean;

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
