import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GovernmentEconomy } from '../entities/government_economy.entity';

@Injectable()
export class GovernmentEconomyService {
  constructor(
    @InjectRepository(GovernmentEconomy)
    private readonly governmentEconomyRepository: Repository<GovernmentEconomy>,
  ) {}

  async findAll(): Promise<GovernmentEconomy[]> {
    return await this.governmentEconomyRepository.find();
  }

  async create(
    governmentEconomy: GovernmentEconomy,
  ): Promise<GovernmentEconomy> {
    return await this.governmentEconomyRepository.save(governmentEconomy);
  }

  async update(
    id: number,
    governmentEconomy: GovernmentEconomy,
  ): Promise<void> {
    await this.governmentEconomyRepository.update(id, governmentEconomy);
  }

  async delete(id: number): Promise<void> {
    await this.governmentEconomyRepository.delete(id);
  }

  async getLatestGovernmentEconomyData(): Promise<GovernmentEconomy> {
    const data = await this.governmentEconomyRepository.find({
      order: { created_at: 'DESC' },
      take: 1,
    });
    return data[0];
  }
}
