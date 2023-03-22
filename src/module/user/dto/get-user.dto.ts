import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class GetUserDto {
  @IsOptional()
  @ApiProperty({ required: false })
  nameUser: string;

  @IsOptional()
  @ApiProperty({ required: false })
  phone: string;

  @IsOptional()
  @ApiProperty({ required: false })
  email: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  skip: number;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  take: number;

  @IsOptional()
  @ApiProperty({ required: false })
  deleteFlg: boolean;
}
