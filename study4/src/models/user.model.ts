import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { PhotoModel } from './photo.model' 

@ObjectType()
@Entity('user')
export class UserModel {

  @Field((type) => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column({ default: true })
  isActive: boolean;

  // @Field()
  // @OneToMany(type => PhotoModel, photo => photo.user)
  // photos: PhotoModel[];
}