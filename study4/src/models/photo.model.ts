import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { UserModel } from './user.model' 

@ObjectType()
@Entity('photo')
export class PhotoModel {

  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column({ length: 500 })
  title: string;

  @Field()
  @Column()
  fileName: string;

  @Field((type) => UserModel, { nullable: false })
  @ManyToOne((type) => UserModel, user => user.photos)
  readonly user: UserModel;
}