import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private user: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    const listUser = await this.user.find();

    return listUser;
  }

  async findOne(email: string): Promise<User> {
    const user = await this.user.findOne({
      where: { email: email },
    });

    return user;
  }
}
