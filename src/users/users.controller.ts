import { Controller, Get, Post, Body, Patch, Param, Delete, ConflictException, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthDTO } from 'src/auth/dto/authDto';
import { AuthGuard } from 'src/auth/security/auth.guard';

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

    const userEntity = await this.usersService.create(authDTO);
    
    return '회원가입성공';
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
  @Patch('/update')
  update(@Req() req: any, @Body() updateUserDto: UpdateUserDto) {
    const user = req.user;
    this.usersService.update(+user.id, updateUserDto);
    
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
