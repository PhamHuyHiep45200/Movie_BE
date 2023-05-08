import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCouponDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDateString()
  timeStart: Date;

  @ApiProperty()
  @IsDateString()
  timeEnd: Date;

  @ApiProperty()
  @IsNumber()
  discount: number;

  @ApiProperty({ default: false })
  @IsOptional()
  deleteFlg?: boolean;
}
