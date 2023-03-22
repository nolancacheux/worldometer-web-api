import { GovernmentEconomyService } from '../services/government_economy.service';
import { GovernmentEconomy } from '../entities/government_economy.entity';
export declare class GovernmentEconomyController {
    private readonly governmentEconomyService;
    constructor(governmentEconomyService: GovernmentEconomyService);
    getGovernmentEconomyData(): Promise<GovernmentEconomy>;
}
