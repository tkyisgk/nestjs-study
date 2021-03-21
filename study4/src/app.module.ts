import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user.module';
import { PhotoModule } from './modules/photo.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.graphql",
    }),
    // ref: https://typeorm.io/#/connection-options
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'nest-test',
      synchronize: true, // 本番環境では使わないよう注意！
      entities: ['dist/**/*.model.js'], // レポジトリを登録
      // entities: ['./models/*.model.{js, ts}'], // MEMO: TSは読めない
    }),
    UserModule,
    PhotoModule,
  ],
})

export class AppModule {}
