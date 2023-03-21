import { Repository } from 'typeorm';
import { Health } from '../entities/health.entity';
export declare class HealthService {
    private readonly healthRepository;
    constructor(healthRepository: Repository<Health>);
    findAll(): Promise<Health[]>;
    create(health: Health): Promise<Health>;
    update(id: number, health: Health): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestHealthData(): Promise<Health>;
}
