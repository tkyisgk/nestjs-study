import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): UserDto {
    return this.userService.getUser();
  }

  @Post()
  postUser(@Body() user: UserDto): boolean {
    return this.userService.addUser(user);
  }
}
