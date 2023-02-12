import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateUserDto {
  @ApiProperty()
  nameUser: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  passWord: string;

  @ApiProperty()
  role: Role;

  @ApiProperty({ default: false })
  deleteFlg: boolean;
}
