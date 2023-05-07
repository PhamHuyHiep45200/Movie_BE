import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateCouponDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsDate()
  timeStart: Date;

  @ApiProperty()
  @IsDate()
  timeEnd: Date;

  @ApiProperty()
  @IsNumber()
  discount: number;

  @ApiProperty({ default: false })
  @IsOptional()
  deleteFlg?: boolean;
}
