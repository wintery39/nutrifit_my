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

  @Cron('0 0 5 * * *')
  async handleCron() {
    const data = await this.userRepository.find();
    var i = 0;
    while(i < Object.keys(data).length){
      this.userRepository.update(data[i].id, {todays: '', today_energy: 0.0, today_water: 0.0, today_protein: 0.0, today_fat: 0.0, today_carbohydrate: 0.0});
      i++;
    }
    return;
  }

  @Cron('0 0 0 * * *')
  async handle0Cron() {
    const user = new User();
    user.user_id = '0';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 1 * * *')
  async handle1Cron() {
    const user = new User();
    user.user_id = '1';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 2 * * *')
  async handle2Cron() {
    const user = new User();
    user.user_id = '2';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 3 * * *')
  async handle3Cron() {
    const user = new User();
    user.user_id = '3';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 4 * * *')
  async handle4Cron() {
    const user = new User();
    user.user_id = '4';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 6 * * *')
  async handle6Cron() {
    const user = new User();
    user.user_id = '6';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 7 * * *')
  async handle7Cron() {
    const user = new User();
    user.user_id = '7';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 8 * * *')
  async handle8Cron() {
    const user = new User();
    user.user_id = '8';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 9 * * *')
  async handle9Cron() {
    const user = new User();
    user.user_id = '9';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 10 * * *')
  async handle10Cron() {
    const user = new User();
    user.user_id = '10';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 11 * * *')
  async handle11Cron() {
    const user = new User();
    user.user_id = '11';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 12 * * *')
  async handle12Cron() {
    const user = new User();
    user.user_id = '12';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 13 * * *')
  async handle13Cron() {
    const user = new User();
    user.user_id = '13';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 14 * * *')
  async handle14Cron() {
    const user = new User();
    user.user_id = '14';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 15 * * *')
  async handle15Cron() {
    const user = new User();
    user.user_id = '15';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 16 * * *')
  async handle16Cron() {
    const user = new User();
    user.user_id = '16';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 17 * * *')
  async handle17Cron() {
    const user = new User();
    user.user_id = '17';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 18 * * *')
  async handle18Cron() {
    const user = new User();
    user.user_id = '18';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 19 * * *')
  async handle19Cron() {
    const user = new User();
    user.user_id = '19';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 20 * * *')
  async handle20Cron() {
    const user = new User();
    user.user_id = '20';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 21 * * *')
  async handle21Cron() {
    const user = new User();
    user.user_id = '21';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 22 * * *')
  async handle22Cron() {
    const user = new User();
    user.user_id = '22';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }

  @Cron('0 0 23 * * *')
  async handle23Cron() {
    const user = new User();
    user.user_id = '23';
    user.user_password = '0';
    user.height = 0;
    user.weight = 0;
    user.age = 0;
    user.activity = 1.2;
    user.gender = '남';
    user.todays = '';
    user.today_energy = 0.0;
    user.today_water = 0.0;
    user.today_protein = 0.0;
    user.today_fat = 0.0;
    user.today_carbohydrate = 0.0;
    return this.userRepository.save(user);
  }
}
