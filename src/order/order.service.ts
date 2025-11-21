import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private repo: Repository<Order>) {}

  findAll() {
    return this.repo.find({ relations: ['user'] });
  }
  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['user'] });
  }
  create(order: Partial<Order>) {
    return this.repo.save(order);
  }
  update(id: number, order: Partial<Order>) {
    return this.repo.update(id, order);
  }
  remove(id: number) {
    return this.repo.delete(id);
  }
}
