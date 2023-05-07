import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCouponDto {
  @IsOptional()
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  timeStart: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  timeEnd: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  discount: number;
}
