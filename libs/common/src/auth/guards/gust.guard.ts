import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common';

@Injectable()
export class GustGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    if (request.isAuthenticated()) res.redirect('/user/dashboard');
    return request.isUnauthenticated();
  }
}
