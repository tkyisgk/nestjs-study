import { Inject } from '@nestjs/common';
import { ID, Args, Query, Mutation, Resolver } from '@nestjs/graphql';

import { UserModel } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AddUserInput } from '../dto/user.dto'

@Resolver()
export class UserResolver {
  constructor(@Inject(UserService) private userService: UserService) {}

  @Query((returns) => [UserModel])
  async users() {
    return await this.userService.findAll();
  }

  @Query((returns) => UserModel)
  async user(@Args('id', { type: () => ID }) id: number) {
    return await this.userService.findOne(id);
  }

  @Mutation((returns) => UserModel)
  async addUser(@Args('user') user: AddUserInput) {
    return await this.userService.add(user);
  }

  @Mutation((returns) => UserModel, { nullable: true })
  async removeUser(@Args('id', { type: () => ID }) id: number) {
    return await this.userService.remove(id);
  }
}
