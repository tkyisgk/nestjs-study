import { Inject } from '@nestjs/common';
import { ID, Args, Query, Mutation, Resolver } from '@nestjs/graphql';

import { PhotoModel } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { AddPhotoInput } from '../dto/photo.dto'

@Resolver()
export class PhotoResolver {
  constructor(@Inject(PhotoService) private photoService: PhotoService) {}

  @Query((returns) => [PhotoModel])
  async photos() {
    return await this.photoService.findAll();
  }

  @Mutation((returns) => PhotoModel)
  addPhoto(@Args('photo') photo: AddPhotoInput) {
    return this.photoService.add(photo);
  }
}
