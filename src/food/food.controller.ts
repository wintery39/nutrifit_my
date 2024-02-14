import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FoodService } from './food.service';
import { searchFoodDto } from './dto/search-food.dto';
import { todaysFoodDto } from './dto/today-food.dto';

@Controller('food')
export class FoodController {
  constructor(private readonly foodService: FoodService) {}

  @Get('foodSearch')
  foodSearch(@Query('food_name') food_name?: string, @Query('DB_group') group?: string) {
    return this.foodService.foodSearch(food_name, group);
  }

  @Get('NO/:NO')
  findByNO(@Param('NO') NO: number) {
    return this.foodService.findbyNO(NO);
  }

  @Post('todays')
  foodToday(@Body() todayfood: todaysFoodDto) {
    return this.foodService.todaysfood(todayfood.todaysfood);
  }

  @Post('recommendfood')  
  recommendBySearch(@Body() search: searchFoodDto) {
    return this.foodService.recommendbySearch(search);
  }
}
