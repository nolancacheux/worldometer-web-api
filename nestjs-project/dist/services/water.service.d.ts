import { Repository } from 'typeorm';
import { Water } from '../entities/water.entity';
export declare class WaterService {
    private readonly waterRepository;
    constructor(waterRepository: Repository<Water>);
    findAll(): Promise<Water[]>;
    create(water: Water): Promise<Water>;
    update(id: number, water: Water): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestWaterData(): Promise<Water>;
}
