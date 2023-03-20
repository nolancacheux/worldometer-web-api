import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Population } from '../entities/population.entity';

@Injectable()
export class PopulationService {
  constructor(
    @InjectRepository(Population)
    private readonly populationRepository: Repository<Population>,
  ) {}

  async findAll(): Promise<Population[]> {
    return await this.populationRepository.find();
  }

  async create(population: Population): Promise<Population> {
    return await this.populationRepository.save(population);
  }

  async update(id: number, population: Population): Promise<void> {
    await this.populationRepository.update(id, population);
  }

  async delete(id: number): Promise<void> {
    await this.populationRepository.delete(id);
  }
}
