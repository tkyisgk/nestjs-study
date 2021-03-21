import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoModel } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { PhotoResolver } from '../resolvers/photo.resolver'

@Module({
  imports: [TypeOrmModule.forFeature([PhotoModel])],
  providers: [PhotoService, PhotoResolver]
})

export class PhotoModule {}
