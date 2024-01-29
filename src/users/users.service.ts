import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { AuthDTO } from 'src/auth/dto/authDto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async create(authDTO: AuthDTO.SignUp){
    const user = new User();
    user.user_id = authDTO.user_id;
    user.user_password = authDTO.user_password;
    user.water = 0.0;
    user.protein = 0.0;
    user.mineral = 0.0;
    user.fat = 0.0;
    user.weight = 0.0;
    user.muscle = 0.0;
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
    user.water = createUserDto.water;
    user.protein = createUserDto.protein;
    user.mineral = createUserDto.mineral;
    user.fat = createUserDto.fat;
    user.weight = createUserDto.weight;
    user.muscle = createUserDto.muscle;
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
