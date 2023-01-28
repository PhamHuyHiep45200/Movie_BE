import { Body, Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUser(@Body() getUserDto: GetUserDto) {
    return this.userService.getAllUser(getUserDto);
  }

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Get('/getOne')
  getUserById(@Body() authUserDto: AuthUserDto) {
    return this.userService.getUserById(authUserDto);
  }
}
