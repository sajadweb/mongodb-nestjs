import { UserClientProxy } from '@libs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(private readonly user: UserClientProxy) {}
  login(data: any) {
    return this.user.login(data);
  }
}
