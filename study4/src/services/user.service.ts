import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserModel } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserModel)
    private usersRepository: Repository<UserModel>,
  ) {}

  findAll(): Promise<UserModel[]> {
    return this.usersRepository.find({
      order: {
        id: 'DESC'
      }
    });
  }

  findOne(id: string): Promise<UserModel> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  async add(obj: UserModel): Promise<void> {
    await this.usersRepository.save(obj);
  }
}