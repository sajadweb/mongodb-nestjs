import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private users: Model<UserDocument>,
  ) {}
  async create({ password, ...data }: CreateUserDto) {
    const hash = await this.hash(password);
    const model = new this.users({ ...data, password: hash });
    const user = await model.save();
    // const user = await this.users.create([createUserDto]);
    delete user.password;
    return user;
  }
  async login(email: string, password: string) {
    let user = await this.users
      .findOne({ email })
      .select('password name username')
      // .select({ password: 0, device: 0 })
      .exec();
    if (!user) {
      throw new BadRequestException('Opps! email not found');
    }
    user = user.toObject();
    if (!(await this.compare(password, user?.password))) {
      throw new BadRequestException('Opps!email and password not valid');
    }
    delete user.password;
    return { ...user };
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
  async hash(password: string) {
    return bcrypt.hash(password, 10);
  }
  async compare(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }
}
