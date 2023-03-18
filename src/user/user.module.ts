import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeature } from './entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([UserFeature])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
