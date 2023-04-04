import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserMicroConfig } from '@libs/common/config/user.config';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule],
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: 'UserProxyService',
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(UserMicroConfig());
      },
    },
  ],
})
export class UserModule {}
