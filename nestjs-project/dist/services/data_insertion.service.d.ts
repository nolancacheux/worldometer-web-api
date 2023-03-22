import { Repository } from 'typeorm';
import { Population } from '../entities/population.entity';
import { GovernmentEconomy } from '../entities/government_economy.entity';
import { SocietyMedia } from '../entities/society_media.entity';
import { Environment } from '../entities/environment.entity';
import { Food } from '../entities/food.entity';
import { Water } from '../entities/water.entity';
import { Energy } from '../entities/energy.entity';
import { Health } from '../entities/health.entity';
export declare class DataInsertionService {
    private readonly populationRepository;
    private readonly governmentEconomyRepository;
    private readonly societyMediaRepository;
    private readonly environmentRepository;
    private readonly foodRepository;
    private readonly waterRepository;
    private readonly energyRepository;
    private readonly healthRepository;
    constructor(populationRepository: Repository<Population>, governmentEconomyRepository: Repository<GovernmentEconomy>, societyMediaRepository: Repository<SocietyMedia>, environmentRepository: Repository<Environment>, foodRepository: Repository<Food>, waterRepository: Repository<Water>, energyRepository: Repository<Energy>, healthRepository: Repository<Health>);
    insertData(): Promise<void>;
}
