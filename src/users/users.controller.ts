import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDTO } from 'src/auth/dto/authDto';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { UpdateTodayDto } from './dto/update-today.dto';
import { todaysFoodDto } from '../food/dto/today-food.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'sign up' })
  @Post('/signup')
  async signup(@Body() authDTO: AuthDTO.SignUp) {
    const {user_id, user_password} = authDTO;

    const hasId = await this.usersService.findByUserId(user_id);
    if (hasId) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }

    if (user_id.length < 4 || user_id.length > 20) {
      throw new UnauthorizedException('아이디는 4~20자로 입력해주세요.');
    }
    const userEntity = await this.usersService.create(authDTO);
    
    return '회원가입성공';
  }

  @ApiOperation({ summary: 'check id' })
  @Post('/checkid')
  async checkid(@Body() authID: AuthDTO.checkID) {
    const {user_id} = authID;

    const hasId = await this.usersService.findByUserId(user_id);
    
    if (hasId) {
      throw new ConflictException('이미 존재하는 아이디입니다.');
    }
    
    return '사용 가능한 아이디입니다.';
  }

  @ApiOperation({ summary: 'check password' })
  @Post('/checkpassword')
  async checkpassword(@Body() authPassword: AuthDTO.checkPassword) {
    const {user_password} = authPassword;
    return '사용 가능한 비밀번호입니다.';
  }

  @ApiOperation({ summary: 'jwt guard (jwt O)' })
  @UseGuards(AuthGuard)
  @Get('/profile')
  async getProfile(@Req() req: any) {
    const user = req.user;
    return user;
  }
  
  @ApiOperation({ summary: 'Create User' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createall(createUserDto);
  }

  @ApiOperation({ summary: 'Find All Users' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'Find One User' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update User (jwt O)' })
  @UseGuards(AuthGuard)
  @Patch('/update/user')
  updateUser(@Req() req: any, @Body() updateUserDto: UpdateUserDto) {
    const user = req.user;
    this.usersService.updateUser(+user.id, updateUserDto);
    
    return '수정 완료';
  }

  @ApiOperation({ summary: 'Update User (jwt O)' })
  @UseGuards(AuthGuard)
  @Patch('/update/todays')
  updateTodays(@Req() req: any, @Body() updateTodayDto: UpdateTodayDto) {
    const user = req.user;
    this.usersService.updateTodays(+user.id, updateTodayDto);
    
    return '수정 완료';
  }

  @ApiOperation({ summary: 'Update User by todaysfood (jwt O)' })
  @UseGuards(AuthGuard)
  @Patch('/update/todaysfood')
  updateTodaysFood(@Req() req: any, @Body() todaysfood: todaysFoodDto) {
    const user = req.user;
    this.usersService.updateTodaysFood(+user.id, todaysfood);
    
    return '수정 완료';
  }

  @ApiOperation({ summary: 'Remove User (jwt O)' })
  @UseGuards(AuthGuard)
  @Delete('/delete')
  remove(@Req() req: any) {
    const user = req.user;
    this.usersService.remove(+user.id)
    return '제거 완료';
  }
}
