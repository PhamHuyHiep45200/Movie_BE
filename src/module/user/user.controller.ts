import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthUserDto } from './dto/auth-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/user-all')
  getAll() {
    return this.userService.getAll();
  }

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

  @Put('/update-user/:id_user')
  updateUser(
    @Param('id_user', ParseIntPipe) id_user: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(updateUserDto, id_user);
  }
}
