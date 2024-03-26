import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './security/passport.jwt';
import { Mail } from 'src/mail/entities/mail.entity';
import { MailModule } from 'src/mail/mail.module';
import { MailService } from 'src/mail/mail.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'Nfdaspoif',
      signOptions: { expiresIn: '30d' },
    }),
    PassportModule,
    MailModule,
  ],
  exports: [AuthService], 
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}