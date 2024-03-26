import { Injectable } from '@nestjs/common';
import { AuthDTO } from './dto/authDto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { MailService } from 'src/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private mailService: MailService, 
  ) {}

  async sendVerificationEmail(email:string):Promise<void> {
    const code = Math.floor(Math.random()*1000000).toString();
    await this.mailService.sendEmailVerify(email, code);
    await this.userService.updateUserVerify(1, email, code);
  }

  async confirmVerificationCode(id: number, code: string): Promise<boolean> {
    const user = await this.userService.findOne(id);
    if(user.code === code) {
      user.code = undefined;
      return true;
    }
    return false;
  }
}
