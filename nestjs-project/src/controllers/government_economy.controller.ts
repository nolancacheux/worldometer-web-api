import { Controller, Get } from '@nestjs/common';
import { GovernmentEconomyService } from '../services/government_economy.service';
import { GovernmentEconomy } from '../entities/government_economy.entity';

@Controller('government-economy')
export class GovernmentEconomyController {
  constructor(private readonly governmentEconomyService: GovernmentEconomyService) {}

  @Get()
  async getGovernmentEconomyData(): Promise<GovernmentEconomy> {
    return this.governmentEconomyService.getLatestGovernmentEconomyData();
  }
}
