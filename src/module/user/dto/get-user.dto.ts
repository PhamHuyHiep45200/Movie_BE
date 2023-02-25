import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class GetUserDto {
  @Optional()
  @IsOptional()
  @ApiProperty({ required: false })
  nameUser: string;

  @IsOptional()
  @Optional()
  @ApiProperty({ required: false })
  phone: string;

  @IsOptional()
  @Optional()
  @ApiProperty({ required: false })
  email: string;

  @IsOptional()
  @Optional()
  @ApiProperty({ required: false })
  skip: string | number;

  @IsOptional()
  @Optional()
  @ApiProperty({ required: false })
  take: string | number;
}
