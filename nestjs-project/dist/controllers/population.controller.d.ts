import { PopulationService } from '../services/population.service';
import { Population } from '../entities/population.entity';
export declare class PopulationController {
    private readonly populationService;
    constructor(populationService: PopulationService);
    getPopulationData(): Promise<Population>;
}
