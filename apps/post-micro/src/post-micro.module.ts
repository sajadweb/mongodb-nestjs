import { MongoConfigAsync } from '@libs/common';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), MongoConfigAsync, PostModule],
})
export class PostMicroModule {}
