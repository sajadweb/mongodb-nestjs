import { UserMicroConfig } from '@libs/common';
import { Global, Module } from '@nestjs/common/decorators';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';
import { UserPattern } from './enum';
import { UserClientProxy } from './proxy.service';

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: UserPattern.NAME,
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(UserMicroConfig());
      },
    },
    UserClientProxy,
  ],
  exports: [UserClientProxy],
})
export class UserProxyModule {}
