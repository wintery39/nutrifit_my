import { Injectable } from '@nestjs/common';
import { FoodRepository } from './food.repository';
import { searchFoodDto } from './dto/search-food.dto';

@Injectable()
export class FoodService {
  constructor(private readonly foodRepository: FoodRepository) {}

  foodSearch(food_name: string, group: string) {
    return this.foodRepository.foodSearch(food_name, group);    
  }

  findbyNO(NO: number) {
    return this.foodRepository.findByNO(NO);    
  }

  recommendbySearch(search: searchFoodDto) {
    var date = new Date();
    var now = date.getHours();
    var chk = 1;
    if (2 <now && now < 10) {
      chk = 4;
    }
    else if (10 <= now && now < 16) {
      chk = 2;
    }
    search.energy_kcal = search.energy_kcal / chk;
    search.protein_g = search.protein_g / chk;
    search.fat_g = search.fat_g / chk;
    search.carbohydrate_g = search.carbohydrate_g / chk;
    return this.foodRepository.recommendBySearch(search);
  }

  async todaysfood(todaysfood: string) {
    if (todaysfood == '') {
      return {
        energy_kcal: 0,
        water_g: 0,
        protein_g: 0,
        fat_g: 0,
        carbohydrate_g: 0,
      };
    }
    const foods = todaysfood.split('\\');
    var i = 0;
    var nowfood = [];
    var data = [0,0,0,0,0];
    var temp;
    while (i < foods.length) {
      nowfood = foods[i].split('^');
      temp = await this.foodRepository.findByNO(Number(nowfood[0]));
      data[0] += Number(nowfood[1]) < 0 ? 0 :(temp.energy_kcal) * (Number(nowfood[1])/temp.once);
      data[1] += Number(nowfood[1]) < 0 ? 0 :(temp.water_g) * (Number(nowfood[1])/temp.once);
      data[2] += Number(nowfood[1]) < 0 ? 0 :(temp.protein_g) * (Number(nowfood[1])/temp.once);
      data[3] += Number(nowfood[1]) < 0 ? 0 :(temp.fat_g) * (Number(nowfood[1])/temp.once);
      data[4] += Number(nowfood[1]) < 0 ? 0 :(temp.carbohydrate_g) * (Number(nowfood[1])/temp.once);
      i++;
    }
    return{
      energy_kcal: Number(data[0].toFixed(2)),
      water_g: Number(data[1].toFixed(2)),
      protein_g: Number(data[2].toFixed(2)),
      fat_g: Number(data[3].toFixed(2)),
      carbohydrate_g: Number(data[4].toFixed(2)),
    };
  }
}
