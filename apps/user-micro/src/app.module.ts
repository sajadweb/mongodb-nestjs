import { MongoConfigAsync } from '@libs/common';
import { getEnvironments } from '@libs/common/config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    getEnvironments(),
    MongoConfigAsync,
    ScheduleModule.forRoot(),
    UserModule,
  ],
})
export class AppModule {}
