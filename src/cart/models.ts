import User from 'src/user';
import Food from 'src/food';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  isChecked: boolean;

  @ManyToMany(() => User, (user) => user.carts)
  @JoinTable()
  users: User[]

  @ManyToMany(() => Food, (food) => food.carts)
  @JoinTable()
  foods: Food[]

}
