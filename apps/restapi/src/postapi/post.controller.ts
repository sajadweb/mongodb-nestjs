import { Controller, Get } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/ping')
  pingCheck() {
    return this.postService.pingCheck();
  }
  @Get()
  findAll() {
    return this.postService.findAll();
  }
}
