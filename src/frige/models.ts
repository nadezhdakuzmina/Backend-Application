import User from 'src/user';
import Food from 'src/food';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

/* @Entity()
export class FrigeItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: boolean;

  @ManyToMany(() => User, (user) => user.friges)
  @JoinColumn()
  users: User[]

  @ManyToMany(() => Food, (food) => food.friges)
  @JoinTable()
  foods: Food[]

} */
