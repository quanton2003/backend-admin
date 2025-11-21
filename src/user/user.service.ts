import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) {}

  findAll() {
    return this.repo.find();
  }
  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }
  create(user: Partial<User>) {
    return this.repo.save(user);
  }
  update(id: number, user: Partial<User>) {
    return this.repo.update(id, user);
  }
  remove(id: number) {
    return this.repo.delete(id);
  }
}
