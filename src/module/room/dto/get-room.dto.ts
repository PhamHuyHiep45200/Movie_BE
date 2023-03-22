import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class GetRoomDto {
  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  deleteFlg: boolean;

  @IsOptional()
  @Optional()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  skip: number;

  @IsOptional()
  @Optional()
  @Transform(({ value }) => +value)
  @ApiProperty({ required: false })
  take: number;
}
