import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Food } from '../entities/food.entity';

@Injectable()
export class FoodService {
  constructor(
    @InjectRepository(Food)
    private readonly foodRepository: Repository<Food>,
  ) {}

  async findAll(): Promise<Food[]> {
    return await this.foodRepository.find();
  }

  async create(food: Food): Promise<Food> {
    return await this.foodRepository.save(food);
  }

  async update(id: number, food: Food): Promise<void> {
    await this.foodRepository.update(id, food);
  }

  async delete(id: number): Promise<void> {
    await this.foodRepository.delete(id);
  }
  async getLatestFoodData(): Promise<Food> {
    const data = await this.foodRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });
      return data[0];
  }
}
