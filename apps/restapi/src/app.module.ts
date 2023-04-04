import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './userapi/user.module';
import { PostModule } from './postapi/post.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
