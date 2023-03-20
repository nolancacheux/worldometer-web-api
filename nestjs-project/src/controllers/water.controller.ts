import { Controller, Get } from '@nestjs/common';
import { WaterService } from '../services/water.service';
import { Water } from '../entities/water.entity';

@Controller('water')
export class WaterController {
  constructor(private readonly waterService: WaterService) {}

  @Get()
  async getWaterData(): Promise<Water> {
    return this.waterService.getLatestWaterData();
  }
}
