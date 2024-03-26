import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { AuthDTO } from 'src/auth/dto/authDto';
import { UpdateTodayDto } from './dto/update-today.dto';
import { todaysFoodDto } from 'src/food/dto/today-food.dto';
import { FoodService } from 'src/food/food.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository,
    private readonly foodService: FoodService) {}

  async create(authDTO: AuthDTO.SignUp){
    const user = new User();
    user.user_id = authDTO.user_id;
    user.user_password = authDTO.user_password;
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = ''
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;

    return this.userRepository.save(user);
  }

  async createall(createUserDto: CreateUserDto) {
    const user = new User();
    user.user_id = createUserDto.user_id;
    user.user_password = createUserDto.user_password;
    user.height = createUserDto.height;
    user.weight = createUserDto.weight;
    user.age = createUserDto.age;
    user.activity = createUserDto.activity
    user.gender = createUserDto.gender;
    user.todays = createUserDto.todays;
    user.today_energy = createUserDto.today_energy;
    user.today_water = createUserDto.today_water;
    user.today_protein = createUserDto.today_protein;
    user.today_fat = createUserDto.today_fat;
    user.today_carbohydrate = createUserDto.today_carbohydrate;
    return this.userRepository.save(user);
  }


  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findById(id);
  }

  findByUserId(user_id: string) {
    return this.userRepository.findByUserId(user_id);
  }

  updateUser(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  updateTodays(id: number, updateTodayDto: UpdateTodayDto) {
    return this.userRepository.update(id, updateTodayDto);
  }

  updateUserVerify(id: number, email: string, code: string) {
    return this.userRepository.update(id, {email: email, code: code});
  }

  async updateTodaysFood(id: number, todaysFood: todaysFoodDto) {
    var updateTodayDto = new UpdateTodayDto();
    const data = await this.foodService.todaysfood(todaysFood.todaysfood)
    updateTodayDto.todays = todaysFood.todaysfood;
    updateTodayDto.today_energy = data.energy_kcal;
    updateTodayDto.today_water = data.water_g;
    updateTodayDto.today_protein = data.protein_g;
    updateTodayDto.today_fat = data.fat_g;
    updateTodayDto.today_carbohydrate = data.carbohydrate_g;
    return this.userRepository.update(id, updateTodayDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async removeall() {
    const data = await this.userRepository.find();
    var i = 0;
    while(i < Object.keys(data).length){
      this.userRepository.update(data[i].id, {todays: '', today_energy: 0.0, today_water: 0.0, today_protein: 0.0, today_fat: 0.0, today_carbohydrate: 0.0});
      i++;
    }
    return;
  }
}
