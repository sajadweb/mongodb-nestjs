import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { MongoConfigAsync } from './mongo-db';

@Module({
  imports: [UserModule, PostModule, MongoConfigAsync],
  controllers: [],
  providers: [],
})
export class AppModule {}
