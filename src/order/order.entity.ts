import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product: string;

  @Column()
  quantity: number;

  @ManyToOne(() => User, (user) => user.orders, {
    onDelete: 'CASCADE',
  })
  user: User;
}
