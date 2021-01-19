import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto'

@Injectable()
export class UserService {
  private user: UserDto;

  getUser(): UserDto {
    return this.user;
  }

  addUser(user: UserDto): boolean {
    this.user = user

    return true
  }
}
