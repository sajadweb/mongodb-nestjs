import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron(CronExpression.EVERY_10_HOURS)
  // @Cron(CronExpression.EVERY_5_SECONDS)
  async checkAccountSummary() {
    this.logger.log(`Run Schedule EVERY 5 SECONDS `);
  }
  @Cron(CronExpression.EVERY_10_HOURS)
  // @Cron('*/6 * * * * *')
  // @Cron(CronExpression.EVERY_30_SECONDS)
  async checkExpiredAccounts() {
    //TODO un comment
    this.logger.log(`Run Schedule EVERY 6 SECONDS`);
  }
}
