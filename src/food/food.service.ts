import { Injectable } from '@nestjs/common';
import { FoodRepository } from './food.repository';

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  foodSearch(food_name: string, group: string) {
    return this.foodRepository.foodSearch(food_name, group);    
  }

  findbyNO(NO: number) {
    return this.foodRepository.findByNO(NO);    
  }

  recommendbySearch(search: any) {
    return this.foodRepository.recommendBySearch2(search);
  }
}
