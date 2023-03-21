import { Repository } from 'typeorm';
import { Energy } from '../entities/energy.entity';
export declare class EnergyService {
    private readonly energyRepository;
    constructor(energyRepository: Repository<Energy>);
    findAll(): Promise<Energy[]>;
    create(energy: Energy): Promise<Energy>;
    update(id: number, energy: Energy): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestEnergyData(): Promise<Energy>;
}
