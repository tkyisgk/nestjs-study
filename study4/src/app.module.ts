import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
