import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from '@libs/schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private posts: Model<PostDocument>,
  ) {}
  async create(createPostDto: CreatePostDto) {
    const model = new this.posts(createPostDto);
    const post = await model.save();
    return post;
  }

  findAll() {
    return this.posts.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
