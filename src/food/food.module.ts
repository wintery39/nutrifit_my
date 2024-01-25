import { Module } from '@nestjs/common';
import { FoodService } from './food.service';
import { FoodController } from './food.controller';
import { FoodRepository } from './food.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FOOD } from './entities/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FOOD])],
  exports: [FoodService],
  controllers: [FoodController],
  providers: [FoodService, FoodRepository],
})
export class FoodModule {}
