import { Optional } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsOptional } from 'class-validator';

export class GetUserDto {
  @Optional()
  @IsOptional()
  @ApiProperty()
  nameUser: string;

  @IsOptional()
  @Optional()
  @ApiProperty()
  phone: string;

  @IsOptional()
  @Optional()
  @ApiProperty()
  email: string;

  @IsOptional()
  @Optional()
  @ApiProperty()
  role: Role;
}
