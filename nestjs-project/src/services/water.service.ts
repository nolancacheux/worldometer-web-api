import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Water } from '../entities/water.entity';

@Injectable()
export class WaterService {
  constructor(
    @InjectRepository(Water)
    private readonly waterRepository: Repository<Water>,
  ) {}

  async findAll(): Promise<Water[]> {
    return await this.waterRepository.find();
  }

  async create(water: Water): Promise<Water> {
    return await this.waterRepository.save(water);
  }

  async update(id: number, water: Water): Promise<void> {
    await this.waterRepository.update(id, water);
  }

  async delete(id: number): Promise<void> {
    await this.waterRepository.delete(id);
  }
  
  async getLatestWaterData(): Promise<Water> {
    const data = await this.waterRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });
      return data[0];
  }
}
