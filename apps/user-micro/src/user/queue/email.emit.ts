import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { EmailQueueEnum } from './email.enum';
import { Queue } from 'bull';

@Injectable()
export class EmailEmiter {
  constructor(
    @InjectQueue(EmailQueueEnum.NAME)
    private readonly queue: Queue,
  ) {}
  emitEmail(data: any): void {
    this.queue.add(EmailQueueEnum.SEND_MAIL_QUEUE, data);
  }
  emitSms(data: any): void {
    this.queue.add(EmailQueueEnum.SEND_SMS_QUEUE, data);
  }
  emitToDb(data: any): void {
    this.queue.add(EmailQueueEnum.SAVE_DB_QUEUE, data);
  }
}
