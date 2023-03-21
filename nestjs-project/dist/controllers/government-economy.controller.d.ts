import { GovernmentEconomyService } from '../services/government-economy.service';
import { GovernmentEconomy } from '../entities/government-economy.entity';
export declare class GovernmentEconomyController {
    private readonly governmentEconomyService;
    constructor(governmentEconomyService: GovernmentEconomyService);
    getGovernmentEconomyData(): Promise<GovernmentEconomy>;
}
