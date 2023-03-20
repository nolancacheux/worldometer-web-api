import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Health } from '../entities/health.entity';

@Injectable()
export class HealthService {
  constructor(
    @InjectRepository(Health)
    private readonly healthRepository: Repository<Health>,
  ) {}

  async findAll(): Promise<Health[]> {
    return await this.healthRepository.find();
  }

  async create(health: Health): Promise<Health> {
    return await this.healthRepository.save(health);
  }

  async update(id: number, health: Health): Promise<void> {
    await this.healthRepository.update(id, health);
  }

  async delete(id: number): Promise<void> {
    await this.healthRepository.delete(id);
  }
}
