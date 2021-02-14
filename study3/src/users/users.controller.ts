import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get: localhost:3000/users/1
  @Get(':id')
  getUser(@Param() id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  // get: localhost:3000/users
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  // post: localhost:3000/users
  @Post()
  postUsers(@Body() user: User): Promise<void> {
    return this.usersService.add(user);
  }

  // post: localhost:3000/users/delete
  @Post('/delete')
  deleteUsers(@Body() id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
