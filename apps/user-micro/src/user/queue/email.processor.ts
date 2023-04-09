import { Process, Processor } from '@nestjs/bull';
import { EmailQueueEnum } from './email.enum';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';
import { User, UserDocument } from '@libs/schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// @Processor('email-queue')
@Processor(EmailQueueEnum.NAME)
export class EmailProcessor {
  private readonly logger: Logger = new Logger('EmailProcessor');
  constructor(
    @InjectModel(User.name)
    private users: Model<UserDocument>,
  ) {}
  @Process(EmailQueueEnum.SEND_MAIL_QUEUE)
  async sendEmail(job: Job<any>) {
    this.logger.log('email', job);
    console.log('email', job.data?.email);
    //email
  }
  @Process(EmailQueueEnum.SAVE_DB_QUEUE)
  async saveInDb(job: Job<any>) {
    this.logger.log('SAVE_DB_QUEUE');
    console.log('befor SAVE_DB_QUEUE', job.data);
    const u = await this.users.create(job.data);
    console.log('after SAVE_DB_QUEUE', u);
    //email
  }
  @Process(EmailQueueEnum.SEND_SMS_QUEUE)
  sendSms(job: Job<any>) {
    this.logger.log('sms', job);
  }
}
