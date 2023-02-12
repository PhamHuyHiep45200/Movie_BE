import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
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
}
