import { ConflictException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)  private readonly userRepository: Repository<User>,) {
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: `Email address "${createUserDto.email}" already registered.`,
        element: 'email',
      });
    }

    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  async findOneById(id: number) {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: id })
      .getOne();

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: { user_id: id },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { user_id: id },
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return this.userRepository.save(updateUserDto);
  }

 async remove(id: number) {
    const user = await this.findOneById(id);
    return this.userRepository.remove(user);
  }

  ping(): string {
    return 'Welcome to our users!';
  }
}
