import CartItem from 'src/cart';
/* import FrigeItem from 'src/frige'; */
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;
  
  @ManyToMany(() => CartItem, (cart) => cart.users )
  @JoinColumn()
  carts: CartItem[]  

/*   @ManyToMany(() => FrigeItem, (frige) => frige.users )
  @JoinColumn()
  friges: FrigeItem[] */
}
