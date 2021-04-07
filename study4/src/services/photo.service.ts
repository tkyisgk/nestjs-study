import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PhotoModel } from '../models/photo.model';
import { AddPhotoInput } from '../dto/photo.dto';

import { UserService } from './user.service'

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoModel)
    private photoRepository: Repository<PhotoModel>,
    private userService: UserService
  ) {}

  async findAll(): Promise<PhotoModel[]> {
    return this.photoRepository.find({
      relations: ['user'],
      order: {
        id: 'DESC'
      }
    });
  }

  async add(obj: AddPhotoInput): Promise<PhotoModel> {
    const user = await this.userService.findOne(obj.userId);
    return this.photoRepository.save({ ...obj, user });
  }
}
