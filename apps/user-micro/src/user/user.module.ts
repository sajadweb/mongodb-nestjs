import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserFeature } from '@libs/schema';
import { EmailEmiter } from './queue/email.emit';
import { EmailProcessor } from './queue/email.processor';
import { BullModule } from '@nestjs/bull';
import { BullConfigAsync } from '@libs/common/config/bull.config';
import { EmailQueueEnum } from './queue/email.enum';
import { TasksService } from './tasks/tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([UserFeature]),
    BullModule.registerQueueAsync({
      ...BullConfigAsync,
      name: EmailQueueEnum.NAME,
    }),
  ],
  controllers: [UserController],
  providers: [UserService, EmailEmiter, EmailProcessor, TasksService],
})
export class UserModule {}
