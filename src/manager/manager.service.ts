import { ConflictException, HttpStatus, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { CreateManagerDto } from './dto/create-manager.dto';
import { UpdateManagerDto } from './dto/update-manager.dto';
import { Manager } from './entities/manager.entity';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)  private readonly managerRepository: Repository<Manager>,) {
  }

  async create(createManagerDto: CreateManagerDto) {
    const existingUser = await this.managerRepository.findOne({
      where: { email: createManagerDto.email },
    });

    if (existingUser) {
      throw new ConflictException({
        status: HttpStatus.CONFLICT,
        error: `Email address "${createManagerDto.email}" already registered.`,
        element: 'email',
      });
    }

    const newManager = this.managerRepository.create(createManagerDto);
    return this.managerRepository.save(newManager);
  }

  findAll() {
    // return this.managerRepository.find();
    return `This action returns a manager`;
  }

  findOne(id: number) {
    return this.managerRepository.findOne({
      where: { manager_id: id },
    });
  }

  async findOneById(id: number) {
    const user = await this.managerRepository
      .createQueryBuilder('manager')
      .where('user.id = :id', { id: id })
      .getOne();

    if (!user) {
      throw new NotFoundException(`Manager #${id} not found`);
    }

    return user;
  }

  async update(id: number, updateManagerDto: UpdateManagerDto) {
    const user = await this.managerRepository.findOne({
      where: { manager_id: id },
    });

    if (!user) {
      throw new NotFoundException(`Manager #${id} not found`);
    }

    return this.managerRepository.save(updateManagerDto);
  }

  async remove(id: number) {
    const user = await this.findOneById(id);
    return this.managerRepository.remove(user);
  }

  ping(): string {
    return 'Welcome to our managers!';
  }
}
