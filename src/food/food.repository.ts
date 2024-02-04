import { LessThan, Like, MoreThan, Repository } from 'typeorm';
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

  async findByName(food_name: string) {
    return await this.repository.find({where: {food_name: Like(`%${food_name}%`)}});
  }

  async findByNO(NO: number): Promise<FOOD> {
    return await this.repository.findOne({ where: { NO } });
  }

  async findBySearch(search: searchFoodDto) {
    return await this.repository.find({where: [({energy_kcal: LessThan(search.energy_kcal)}) && ({water_g: LessThan(search.water_g)})]});
  }
}
