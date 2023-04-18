import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    console.log('AuthenticatedGuard', 'canActivate');
    const request = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    if (!request.isAuthenticated()) res.redirect('/user/login');
    return request.isAuthenticated();
  }
}
