import { WaterService } from '../services/water.service';
import { Water } from '../entities/water.entity';
export declare class WaterController {
    private readonly waterService;
    constructor(waterService: WaterService);
    getWaterData(): Promise<Water>;
}
