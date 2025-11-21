import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  sdt: string;

  @Column({ nullable: true })
  location: string;

  @Column({ select: false, nullable: true })
  password: string;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
