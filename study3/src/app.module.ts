import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module'
import { LoggerMiddleware } from './logger.middleware';
import { PhotosModule } from './photos/photos.module';

import { User } from './users/users.entity';
import { Photo } from './photos/photos.entity';

@Module({
  imports: [
    // ref: https://typeorm.io/#/connection-options
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-test',
      entities: [User, Photo],
      synchronize: true, // 本番環境では使わないよう注意！
    }),
    UsersModule,
    PhotosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('/');
      // .forRoutes(AppController);
      // .forRoutes({ path: '/', method: RequestMethod.GET });
      // MEMO: app.tsに設定すると、グローバル
  }
}
