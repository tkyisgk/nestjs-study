import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';

import { UserModel } from '../models/user.model'
import { UserService } from '../services/user.service'

@Resolver()
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => [UserModel])
  async users() {
    return await this.userService.findAll();
  }
}
