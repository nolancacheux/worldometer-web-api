import { Controller, Get } from '@nestjs/common';
import { FoodService } from '../services/food.service';
import { Food } from '../entities/food.entity';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get()
  async getFoodData(): Promise<Food> {
    return this.foodService.getLatestFoodData();
  }
}
