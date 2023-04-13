import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';
import { UserPattern } from './enum';

@Injectable()
export class UserClientProxy {
  constructor(@Inject(UserPattern.NAME) private client: ClientProxy) {}
  async pingCheck() {
    try {
      await this.client.connect();
      return 'ok';
    } catch (error) {
      return 'Error';
    }
  }
  async findAll() {
    try {
      return lastValueFrom(
        this.client.send(UserPattern.FIND_ALL, {}).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }
  async create(data: any) {
    try {
      return lastValueFrom(
        this.client.send(UserPattern.CREATE, data).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }
  async login(data: any) {
    try {
      return lastValueFrom(
        this.client.send(UserPattern.LOGIN, data).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }
}
