import { Controller, Get } from '@nestjs/common';
import { EnvironmentService } from '../services/environment.service';
import { Environment } from '../entities/environment.entity';

@Controller('environment')
export class EnvironmentController {
  constructor(private readonly environmentService: EnvironmentService) {}

  @Get()
  async getEnvironmentData(): Promise<Environment> {
    return this.environmentService.getLatestEnvironmentData();
  }
}
