import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { getEnvironments } from '@libs/common';
import { HomeModule } from './home/home.module';
import { UserProxyModule } from '@libs/common';

@Module({
  imports: [
    getEnvironments(),
    UserProxyModule,
    UserModule,
    PostModule,
    HomeModule,
  ],
})
export class ViewModule {}
