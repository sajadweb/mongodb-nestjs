import { MongoConfigAsync } from '@libs/common';
import { getEnvironments } from '@libs/common/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [getEnvironments(), MongoConfigAsync, UserModule],
})
export class UserMicroModule {}
