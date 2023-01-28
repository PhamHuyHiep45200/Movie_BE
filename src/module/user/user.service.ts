import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';
import { GetUserDto } from './dto/get-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAllUser(getUserDto: GetUserDto) {
    const user = await this.prisma.user.findMany({
      where: getUserDto,
    });
    return { status: 200, data: user };
  }
  async getUserById(authUserDto: AuthUserDto) {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email: authUserDto.email },
    });
    if (user && user.passWord === authUserDto.passWord) {
      return { status: 200, data: user };
    } else {
      return { message: 'Vui lòng kiểm tra lại thông tin tài khoản!' };
    }
  }
  async createUser(createUserDto: CreateUserDto) {
    const data = await this.prisma.user.create({
      data: createUserDto,
    });
    return { status: 200, data };
  }
}
