import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PostFeature } from '@libs/schema';

@Module({
  imports: [MongooseModule.forFeature([PostFeature])],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
