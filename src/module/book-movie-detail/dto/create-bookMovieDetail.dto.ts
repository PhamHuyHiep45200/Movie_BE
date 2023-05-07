import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateBookMovieDetailDto {
  @ApiProperty()
  @IsNumber()
  orderId: number;

  @ApiProperty()
  @IsNumber()
  price: number;

  @ApiProperty()
  @IsNumber({}, { each: true })
  chairs: number[];

  @ApiProperty({ default: false })
  @IsOptional()
  deleteFlg?: boolean;
}
