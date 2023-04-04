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

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @MessagePattern('create')
  create(@Payload() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @MessagePattern('find.all')
  findAll(@Payload() data: any) {
    return this.postService.findAll();
  }

  @MessagePattern('findOne')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @MessagePattern('update')
  update(@Payload('id') id: string, @Payload() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  @MessagePattern('remove')
  remove(@Payload('id') id: string) {
    return this.postService.remove(+id);
  }
}
