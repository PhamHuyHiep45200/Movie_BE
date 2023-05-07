import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

export class CreateBookMovieDto {
  @ApiProperty()
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsNumber()
  userId: number;

  @ApiProperty()
  @IsNumber()
  couponId: number;

  @ApiProperty()
  @IsNumber()
  showtimesMovieId: number;

  @ApiProperty({ default: false })
  @IsOptional()
  deleteFlg?: boolean;
}
