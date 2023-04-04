import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';
//API
@Injectable()
export class UserService {
  constructor(@Inject('UserProxyService') private client: ClientProxy) {}
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
        this.client.send('find.all', {}).pipe(
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
        this.client.send('create', data).pipe(
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
