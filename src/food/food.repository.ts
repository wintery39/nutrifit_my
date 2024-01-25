import { LessThan, MoreThan, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FOOD } from './entities/food.entity';

@Injectable()
export class FoodRepository extends Repository<FOOD> {
  constructor(
    @InjectRepository(FOOD) private readonly repository: Repository<FOOD>,
  ) {
    super(repository.target, repository.manager);
  }

  async findByName(food_name: string): Promise<FOOD> {
    return await this.repository.findOne({where: {food_name}});
  }
}
