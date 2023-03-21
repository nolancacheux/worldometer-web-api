import { HealthService } from '../services/health.service';
import { Health } from '../entities/health.entity';
export declare class HealthController {
    private readonly healthService;
    constructor(healthService: HealthService);
    getHealthData(): Promise<Health>;
}
