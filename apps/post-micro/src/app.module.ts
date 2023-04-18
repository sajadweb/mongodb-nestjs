import { MongoConfigAsync, getEnvironments } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [getEnvironments(), MongoConfigAsync, PostModule],
})
export class AppModule {}
