import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User, UserDocument } from '@libs/schema';
import * as bcrypt from 'bcrypt';
import { EmailEmiter } from '../queue/email.emit';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private users: Model<UserDocument>,
    private emit: EmailEmiter,
  ) {}
  async create({ password, ...data }: CreateUserDto) {
    const hash = await this.hash(password);
    const model = new this.users({ ...data, password: hash });
    const user = await model.save();
    // const user = await this.users.create([createUserDto]);
    delete user.password;
    this.emit.emitEmail(user);
    // this.emit.emitToDb(model);
    return model;
  }
  async login(email: string, password: string) {
    let user = await this.users
      .findOne({ email })
      .select('password name username')
      // .select({ password: 0, device: 0 })
      .exec();
    if (!user) {
      return { error: 'Opps! email not found' };
    }
    user = user.toObject();
    if (!(await this.compare(password, user?.password))) {
      return { error: 'Opps!email and password not valid' };
    }
    delete user.password;
    return { ...user };
  }

  findAll() {
    console.log('find all in user microservice');
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
