import { Repository } from 'typeorm';
import { GovernmentEconomy } from '../entities/government-economy.entity';
export declare class GovernmentEconomyService {
    private readonly governmentEconomyRepository;
    constructor(governmentEconomyRepository: Repository<GovernmentEconomy>);
    findAll(): Promise<GovernmentEconomy[]>;
    create(governmentEconomy: GovernmentEconomy): Promise<GovernmentEconomy>;
    update(id: number, governmentEconomy: GovernmentEconomy): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestGovernmentEconomyData(): Promise<GovernmentEconomy>;
}
