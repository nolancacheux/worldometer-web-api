import { Repository } from 'typeorm';
import { Environment } from '../entities/environment.entity';
export declare class EnvironmentService {
    private readonly environmentRepository;
    constructor(environmentRepository: Repository<Environment>);
    findAll(): Promise<Environment[]>;
    create(environment: Environment): Promise<Environment>;
    update(id: number, environment: Environment): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestEnvironmentData(): Promise<Environment>;
}
