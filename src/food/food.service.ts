import { Injectable } from '@nestjs/common';
import { FoodRepository } from './food.repository';

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  findbyName(food_name: string) {
    return this.foodRepository.findByName(food_name);    
  }

  findbyNO(NO: number) {
    return this.foodRepository.findByNO(NO);    
  }
}
