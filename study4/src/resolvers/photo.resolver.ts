import { Inject } from '@nestjs/common';
import { ID, Args, Query, Mutation, Resolver } from '@nestjs/graphql';

import { PhotoModel } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { AddPhotoInput } from '../dto/photo.dto'

@Resolver()
export class PhotoResolver {
  constructor(@Inject(PhotoService) private photoService: PhotoService) {}

  @Mutation((returns) => PhotoModel)
  async addUser(@Args('photo') photo: AddPhotoInput) {
    return await this.photoService.add(photo);
  }
}
