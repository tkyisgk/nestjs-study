import { Controller, Post, Body } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { Photo } from './photos.entity';

@Controller('photos')
export class PhotosController {
  constructor(private readonly photosService: PhotosService) {}

  // post: localhost:3000/photos
  @Post()
  postPhotos(@Body() photo: Photo): Promise<void> {
    return this.photosService.add(photo);
  }
}
