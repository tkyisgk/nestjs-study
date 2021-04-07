import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoModel } from '../models/photo.model';
import { PhotoService } from '../services/photo.service';
import { PhotoResolver } from '../resolvers/photo.resolver';

import { UserModule } from './user.module'

@Module({
  imports: [TypeOrmModule.forFeature([PhotoModel]), forwardRef(() => UserModule)],
  providers: [PhotoService, PhotoResolver]
})

export class PhotoModule {}
