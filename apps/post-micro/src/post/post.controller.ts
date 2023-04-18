/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PostPattern } from '@libs/common/client-proxy/post';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern(PostPattern.CREATE)
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @MessagePattern(PostPattern.FIND_ALL)
  findAll(@Payload() data: any) {
    return this.postService.findAll();
  }

  @MessagePattern(PostPattern.FIND_ONE)
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @MessagePattern(PostPattern.UPDATE)
  update(@Payload('id') id: string, @Payload() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @MessagePattern(PostPattern.DELETE)
  remove(@Payload('id') id: string) {
    return this.postService.remove(+id);
  }
}
