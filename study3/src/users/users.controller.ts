import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // localhost:3000/users/1
  @Get(':id')
  getUser(@Param() id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  // localhost:3000/users/
  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }
}
