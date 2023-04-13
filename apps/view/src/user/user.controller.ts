import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { views } from '@libs/common';
import { Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('login')
  login(@Res() res: Response) {
    return views(res, 'user/login', { title: 'Login page' });
  }
  @Post('login')
  async loginPost(@Res() res: Response, @Body() data: any) {
    const user = await this.userService.login(data);
    if (user?.error)
      return views(res, 'user/login', {
        title: 'Login page',
        error: user?.error,
      });
    else
      return views(res, 'user/dashboard', {
        title: 'Login page',
        error: user?.error,
      });
  }
}
