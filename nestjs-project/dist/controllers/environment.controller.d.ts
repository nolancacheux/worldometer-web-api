import { EnvironmentService } from '../services/environment.service';
import { Environment } from '../entities/environment.entity';
export declare class EnvironmentController {
    private readonly environmentService;
    constructor(environmentService: EnvironmentService);
    getEnvironmentData(): Promise<Environment>;
}
