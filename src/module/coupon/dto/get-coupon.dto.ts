import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class GetCouponDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  timeStart: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  timeEnd: string;

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
