/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom, map } from 'rxjs';
import { PostPattern } from './enum';

@Injectable()
export class PostClientProxy {
  constructor(@Inject(PostPattern.NAME) private client: ClientProxy) {}
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
        this.client.send(PostPattern.FIND_ALL, {}).pipe(
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
        this.client.send(PostPattern.CREATE, data).pipe(
          map((res) => {
            return res;
          }),
        ),
      );
    } catch (error) {
      return 'Error';
    }
  }


 
// eslint-disable-next-line prettier/prettier
}
