import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { PhotoModel } from '../models/photo.model';
import { AddPhotoInput } from '../dto/photo.dto';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(PhotoModel)
    private photoRepository: Repository<PhotoModel>,
  ) {}

  async add(obj: AddPhotoInput): Promise<PhotoModel> {
    console.log(obj)
    return await this.photoRepository.save(obj);
  }
}
