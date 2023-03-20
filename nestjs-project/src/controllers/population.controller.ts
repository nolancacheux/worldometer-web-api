import { Controller, Get } from '@nestjs/common';
import { PopulationService } from '../services/population.service';
import { Population } from '../entities/population.entity';

@Controller('population')
export class PopulationController {
  constructor(private readonly populationService: PopulationService) {}

  @Get()
  async getPopulationData(): Promise<Population> {
    return this.populationService.getLatestPopulationData();
  }
}
