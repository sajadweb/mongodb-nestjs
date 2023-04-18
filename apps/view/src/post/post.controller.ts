import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PostService } from './post.service';
import { views } from '@libs/common';
import { Response } from 'express';
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/post')
  sunglePost(@Res() res: Response) {
    return views(res, 'post/post', { title: 'Single Post' });
  }

  @Get('/list')
  listPost(@Res() res: Response) {
    return views(res, 'post/list', { title: 'list Post' });
  }

  @Get('/add')
  addPost(@Res() res: Response) {
    return views(res, 'post/add', { title: 'add Post' });
  }

  @Post('/post')
  async createPost(@Res() res: Response, @Body() data: any) {
    const post = await this.postService.createPosts(data);
    return views(res, 'post/add', {
      title: 'create post page',
    });
  }
}

// @Get('/post')
// login(@Res() res: Response) {
//   return views(res, 'user/login', { title: 'login page' });
