import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('mail')
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get()
  @ApiOperation({ summary: 'send email' })
  async sendEmail() {
    return this.mailService.sendEmail();
  }

  @Post('/email-verify')
  @ApiOperation({ summary: 'email verify' })
  async emailVerify(@Body() createMailDto: CreateMailDto) {
    return this.mailService.sendEmailVerify(createMailDto.to, createMailDto.user);
  }
}
