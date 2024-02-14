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
    var date = new Date();
    var now = date.getHours();
    var chk = 1;
    console.log(now);
    if (2 <now && now < 10) {
      chk = 4;
    }
    else if (10 <= now && now < 16) {
      chk = 2;
    }
    search.energy_kcal = search.energy_kcal / chk;
    search.water_g = search.water_g / chk;
    search.protein_g = search.protein_g / chk;
    search.fat_g = search.fat_g / chk;
    search.carbohydrate_g = search.carbohydrate_g / chk;
    return this.foodRepository.recommendBySearch(search);
  }

  async todaysfood(todaysfood: string) {
    const foods = todaysfood.split(',');
    var i = 0;
    var nowfood = [];
    var data = [1,1,1,1,1];
    var temp;
    while (i < foods.length) {
      nowfood = foods[i].split('_');
      temp = await this.foodRepository.findByNO(Number(nowfood[0]));
      data[0] += (temp.energy_kcal) * (Number(nowfood[1])/temp.once);
      data[1] += (temp.water_g/temp.once) * (Number(nowfood[1])/temp.once);
      data[2] += (temp.protein_g/temp.once) * (Number(nowfood[1])/temp.once);
      data[3] += (temp.fat_g/temp.once) * (Number(nowfood[1])/temp.once);
      data[4] += (temp.carbohydrate_g/temp.once) * (Number(nowfood[1])/temp.once);
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
