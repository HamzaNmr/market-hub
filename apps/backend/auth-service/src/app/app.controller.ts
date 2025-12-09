import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignupDto } from '@market-hub/domain';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  signup(signupData: SignupDto) {
    return { message: 'Signup endpoint' };
  }
}
