import { EnergyService } from '../services/energy.service';
import { Energy } from '../entities/energy.entity';
export declare class EnergyController {
    private readonly energyService;
    constructor(energyService: EnergyService);
    getEnergyData(): Promise<Energy>;
}
