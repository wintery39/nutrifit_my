import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  UseGuards,
  UnauthorizedException
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt/dist';
import * as bcrypt from 'bcrypt';

import { AuthDTO } from './dto/authDto';
import { UsersService } from 'src/users/users.service';

@Controller()
export class AuthController {
  constructor(private readonly userService: UsersService) { }

  @Post('/signin')
  async signin(@Body() authDTO: AuthDTO.SignIn) {
    const { user_id, user_password } = authDTO;

    const user = await this.userService.findByUserId(user_id);
    if (!user) {
      throw new UnauthorizedException('이메일 또는 비밀번호를 확인해 주세요.');
    }

    const isSamePassword = bcrypt.compareSync(user_password, user.user_password);
    if (!isSamePassword) {
      throw new UnauthorizedException('이메일 또는 비밀번호를 확인해 주세요.');
    }

    return "로그인 완료"
  }
}