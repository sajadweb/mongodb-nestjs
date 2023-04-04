import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';

@Injectable()
export class PostService {
  constructor(@Inject('PostProxyService') private client: ClientProxy) {}
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
}
