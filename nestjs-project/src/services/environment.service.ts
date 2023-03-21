import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Environment } from '../entities/environment.entity';

@Injectable()
export class EnvironmentService {
  constructor(
    @InjectRepository(Environment)
    private readonly environmentRepository: Repository<Environment>,
  ) {}

  async findAll(): Promise<Environment[]> {
    return await this.environmentRepository.find();
  }

  async create(environment: Environment): Promise<Environment> {
    return await this.environmentRepository.save(environment);
  }

  async update(id: number, environment: Environment): Promise<void> {
    await this.environmentRepository.update(id, environment);
  }

  async delete(id: number): Promise<void> {
    await this.environmentRepository.delete(id);
  }
  async getLatestEnvironmentData(): Promise<Environment> {
    const data = await this.environmentRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });
      return data[0];
  }
}