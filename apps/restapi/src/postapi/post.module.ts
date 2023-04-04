import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PostMicroConfig } from '@libs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule],
  controllers: [PostController],
  providers: [
    PostService,
    {
      provide: 'PostProxyService',
      inject: [ConfigService],
      useFactory: async () => {
        return ClientProxyFactory.create(PostMicroConfig());
      },
    },
  ],
})
export class PostModule {}
