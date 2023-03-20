import { Controller, Get } from '@nestjs/common';
import { EnergyService } from '../services/energy.service';
import { Energy } from '../entities/energy.entity';

@Controller('energy')
export class EnergyController {
  constructor(private readonly energyService: EnergyService) {}

  @Get()
  async getEnergyData(): Promise<Energy> {
    return this.energyService.getLatestEnergyData();
  }
}
