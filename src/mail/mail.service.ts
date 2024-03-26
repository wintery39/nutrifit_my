import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { response } from 'express';
import { verify } from 'crypto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail() {
    await this.mailerService
    .sendMail({
      to: 'wintery39@korea.co.kr',
      subject: 'Test',
      text: 'welcome',

      template: './email',

      context: {
        code: 'cf1a3f828287',
        username: 'copilot',
      },
    })
    .then((response) => {
    console.log('Mail sent', response);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  async sendEmailVerify(user_email: string, verifynumber: string) {
    await this.mailerService
    .sendMail({
      to: user_email,
      subject: '가입 인증 메일',

      template: './emailverify',
      
      context: {
        code: 'cf1a3f828287',
        number: verifynumber,
      },
    }) 
  }


}
