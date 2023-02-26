import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Param,
  ParseIntPipe,
  Query,
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

  @Get()
  getAllUser(@Query() getUserDto: GetUserDto) {
    return this.userService.getAllUser(getUserDto);
  }

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Post('/login')
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

  @Put('/delete-user/:id_user')
  deleteUser(@Param('id_user', ParseIntPipe) id_user: number) {
    return this.userService.deleteUser(id_user);
  }

  @Put('/un-delete-user/:id_user')
  unDeleteUser(@Param('id_user', ParseIntPipe) id_user: number) {
    return this.userService.unDeleteUser(id_user);
  }
}
