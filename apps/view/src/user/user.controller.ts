import { Controller, Get, Res, Post, Body, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { IsGust, IsLogin, redirect, views } from '@libs/common';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @IsLogin()
  @Get('/list')
  async userlist(@Res() res: Response) {
    const users = await this.userService.listUser();
    return views(res, 'user/list', { title: 'user list page', users });
  }
  @IsGust()
  @Get('/login')
  login(@Res() res: Response) {
    return views(res, 'user/login', { title: 'login page' });
  }

  @Post('/login')
  async loginPst(@Res() res: Response, @Body() data: any, @Request() request) {
    const user = await this.userService.login(data);
    // console.log('session', request.session);
    // return res.send(request.session);
    if (user?.error) {
      return views(res, 'user/login', {
        title: 'login page',
        error: user?.error,
      });
    } else {
      //save var global
      request.session['passport'] = { user: user?.data };
      //redirect dashboard
      console.log('request.session', request.session);
      return redirect(res, '/user/dashboard');
    }
  }

  @IsGust()
  @Get('/signup')
  signup(@Res() res: Response) {
    return views(res, 'user/signup', { title: 'signup page' });
  }

  @Post('/signup')
  async signupPost(@Res() res: Response, @Body() data: any) {
    const user = await this.userService.signUp(data);
    if (user?.error) {
      return views(res, 'user/signup', {
        title: 'sign up page',
        error: user?.error,
      });
    } else {
      return redirect(res, '/user/dashboard');
    }
  }
  @IsLogin()
  @Get('/dashboard')
  async dashboard(@Res() res: Response, @Request() request) {
    // get data in global var
    return views(res, 'user/dashboard', {
      title: 'dashboard',
      user: request?.session?.passport?.user,
    });
  }
}
