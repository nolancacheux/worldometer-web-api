import { Repository } from 'typeorm';
import { Population } from '../entities/population.entity';
export declare class PopulationService {
    private readonly populationRepository;
    constructor(populationRepository: Repository<Population>);
    findAll(): Promise<Population[]>;
    create(population: Population): Promise<Population>;
    update(id: number, population: Population): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestPopulationData(): Promise<Population>;
}
