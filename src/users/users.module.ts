import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { FoodService } from 'src/food/food.service';
import { FoodRepository } from 'src/food/food.repository';
import { FoodModule } from 'src/food/food.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ScheduleModule.forRoot(),FoodModule],
  exports: [UsersService],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
})
export class UsersModule {}
