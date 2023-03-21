import { FoodService } from '../services/food.service';
import { Food } from '../entities/food.entity';
export declare class FoodController {
    private readonly foodService;
    constructor(foodService: FoodService);
    getFoodData(): Promise<Food>;
}
