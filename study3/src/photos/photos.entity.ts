import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../users/users.entity'

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 500 })
  title: string;

  @Column()
  fileName: string;

  @ManyToOne(() => User, user => user.photos)
  user: User;
}