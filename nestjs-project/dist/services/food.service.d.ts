import { Repository } from 'typeorm';
import { Food } from '../entities/food.entity';
export declare class FoodService {
    private readonly foodRepository;
    constructor(foodRepository: Repository<Food>);
    findAll(): Promise<Food[]>;
    create(food: Food): Promise<Food>;
    update(id: number, food: Food): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestFoodData(): Promise<Food>;
}
