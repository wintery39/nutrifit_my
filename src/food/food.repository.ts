import { Between, LessThan, Like, MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FOOD } from './entities/food.entity';
import { searchFoodDto } from './dto/search-food.dto';

@Injectable()
export class FoodRepository extends Repository<FOOD> {
  constructor(
    @InjectRepository(FOOD) private readonly repository: Repository<FOOD>,
  ) {
    super(repository.target, repository.manager);
  }

  async foodSearch(food_name: string, group: string) {
    if (group) {
      var li1 = await this.repository.find({ where: { food_name: food_name, DB_group: Like(`${group}`) }});
      var li2 = await this.repository.find({ where: { food_name: Like(`%${food_name}%`), DB_group: Like(`${group}`) }});

      var li3 = li1.concat(li2);
      return li3;
    } else{
      var li1 = await this.repository.find({ where: { food_name: food_name } });
      var li2 = await this.repository.find({ where: { food_name: Like(`%${food_name}%`) } });
      
      var li3 = li1.concat(li2);
      return li3;
    }
  }

  async findByNO(NO: number): Promise<FOOD> {
    return await this.repository.findOne({ where: { NO } });
  }

  async recommendBySearch(search: searchFoodDto) {
    const norm = 5
    var key = 2;
    var li = [];
    while(li.length < 10 && key < 10){
      li = await this.repository.find({where: [{energy_kcal: Between(search.energy_kcal*((100-key)/100),search.energy_kcal*((100+key)/100)), water_g: Between(search.water_g*((100-key)/100),search.water_g*((100+key)/100)), protein_g: Between(search.protein_g*((100-key)/100),search.protein_g*((100+key)/100)), fat_g: Between(search.fat_g*((100-key)/100),search.fat_g*((100+key)/100)), carbohydrate_g: Between(search.carbohydrate_g*((100-key)/100),search.carbohydrate_g*((100+key)/100))}]});
      key+=2;
    }
    if (li.length >= 10) {
      return li;
    }
    key = 2;

    switch (search.lack_nutrient) {
      case 1:
        while(li.length < 10 && key < 10){
          li = await this.repository.find({where: [{energy_kcal: Between(search.energy_kcal*((100-key)/100),search.energy_kcal*((100+key)/100)), water_g: LessThan(search.water_g*((100+norm)/100)), protein_g: LessThan(search.protein_g*((100+norm)/100)), fat_g: LessThan(search.fat_g*((100+norm)/100)), carbohydrate_g: LessThan(search.carbohydrate_g*((100+norm)/100))}]});
          key+=2;
        }
        return li;
      case 2:
        while(li.length < 10 && key < 10){
          li = await this.repository.find({where: [{energy_kcal: LessThan(search.energy_kcal*((100+norm)/100)), water_g: Between(search.water_g*((100-key)/100),search.water_g*((100+key)/100)), protein_g: LessThan(search.protein_g*((100+norm)/100)), fat_g: LessThan(search.fat_g*((100+norm)/100)), carbohydrate_g: LessThan(search.carbohydrate_g*((100+norm)/100))}]});
          key+=2;
        }
        return li;
      case 3:
        while(li.length < 10 && key < 10){
          li = await this.repository.find({where: [{energy_kcal: LessThan(search.energy_kcal*((100+norm)/100)), water_g: LessThan(search.water_g*((100+norm)/100)), protein_g: Between(search.protein_g*((100-key)/100),search.protein_g*((100+key)/100)), fat_g: LessThan(search.fat_g*((100+norm)/100)), carbohydrate_g: LessThan(search.carbohydrate_g*((100+norm)/100))}]});
          key+=2;
        }
        return li;
      case 4:
        while(li.length < 10 && key < 10){
          li = await this.repository.find({where: [{energy_kcal: LessThan(search.energy_kcal*((100+norm)/100)), water_g: LessThan(search.water_g*((100+norm)/100)), protein_g: LessThan(search.protein_g*((100+norm)/100)), fat_g: Between(search.fat_g*((100-key)/100), search.fat_g*((100+key)/100)), carbohydrate_g: LessThan(search.carbohydrate_g*((100+norm)/100))}]});
          key+=2;
        }
        return li;
      case 5:
        while(li.length < 10 && key < 10){  
          li = await this.repository.find({where: [{energy_kcal: LessThan(search.energy_kcal*((100+norm)/100)), water_g: LessThan(search.water_g*((100+norm)/100)), protein_g: LessThan(search.protein_g*((100+norm)/100)), fat_g: LessThan(search.fat_g*((100+norm)/100)), carbohydrate_g: Between(search.carbohydrate_g*((100-key)/100), search.carbohydrate_g*((100+key)/100))}]});
          key+=2;
        }
      default:
        return 'input error';
    }
  }
}
