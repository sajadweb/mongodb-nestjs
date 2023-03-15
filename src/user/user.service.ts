import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private users: Model<UserDocument>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const model = new this.users(createUserDto);
    const user = await model.save();
    // const user = await this.users.create([createUserDto]);
    return user;
  }

  findAll() {
    return this.users.find();
  }

  findOne(id: any) {
    return this.users.findById(id);
  }

  update(id: any, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: any) {
    return this.users.deleteOne({ _id: id });
  }
}
