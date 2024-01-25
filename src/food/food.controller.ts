import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodService } from './food.service';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get(':food_name')
  findOne(@Param('food_name') food_name: string) {
    return this.foodService.findbyName(food_name);
  }

  @Get('NO/:NO')
  findByNO(@Param('NO') NO: number) {
    return this.foodService.findbyNO(NO);
  }
}
