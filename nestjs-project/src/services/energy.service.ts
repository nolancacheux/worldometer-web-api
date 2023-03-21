import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Energy } from '../entities/energy.entity';

@Injectable()
export class EnergyService {
  constructor(
    @InjectRepository(Energy)
    private readonly energyRepository: Repository<Energy>,
  ) {}

  async findAll(): Promise<Energy[]> {
    return await this.energyRepository.find();
  }

  async create(energy: Energy): Promise<Energy> {
    return await this.energyRepository.save(energy);
  }

  async update(id: number, energy: Energy): Promise<void> {
    await this.energyRepository.update(id, energy);
  }

  async delete(id: number): Promise<void> {
    await this.energyRepository.delete(id);
  }

  async getLatestEnergyData(): Promise<Energy> {
    const data = await this.energyRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });
      return data[0];
  }
}
