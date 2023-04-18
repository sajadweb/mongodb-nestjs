/* eslint-disable prettier/prettier */
import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { PostPattern } from './enum';
import { PostClientProxy } from './proxy.service';
import { PostMicroConfig } from '@libs/common';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: PostPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(PostMicroConfig());
      },
    },
    PostClientProxy,
  ],
  exports: [PostClientProxy],
})
export class PostProxyModule {}
