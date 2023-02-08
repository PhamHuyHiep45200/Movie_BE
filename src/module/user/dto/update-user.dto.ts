import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { IsOptional } from 'class-validator';
import { Optional } from '@nestjs/common';

export class UpdateUserDto {
  @Optional()
  @IsOptional()
  @ApiProperty()
  nameUser: string;

  @Optional()
  @IsOptional()
  @ApiProperty()
  phone: string;

  @Optional()
  @IsOptional()
  @ApiProperty()
  email: string;

  @Optional()
  @IsOptional()
  @ApiProperty()
  passWord: string;

  @Optional()
  @IsOptional()
  @ApiProperty()
  role: Role;
}
