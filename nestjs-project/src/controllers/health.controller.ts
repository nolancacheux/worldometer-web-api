import { Controller, Get } from '@nestjs/common';
import { HealthService } from '../services/health.service';
import { Health } from '../entities/health.entity';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get()
  async getHealthData(): Promise<Health> {
    return this.healthService.getLatestHealthData();
  }
}
