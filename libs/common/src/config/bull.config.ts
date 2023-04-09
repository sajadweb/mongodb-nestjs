import { ConfigModule, ConfigService } from '@nestjs/config';
import { QueueOptions } from 'bull';
import * as Redis from 'ioredis';

export const BullConfigAsync = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    return <QueueOptions>{
      redis: <Redis.RedisOptions>(<unknown>{
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<string>('REDIS_PORT'),
        password: configService.get<string>('REDIS_PASSWORD'),
        keyPrefix: configService.get<string>('REDIS_PREFIX'),
        db: configService.get<string>('REDIS_DB'),
        retryAttempts: 5,
        retryDelay: 5000,
      }),
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
      },
      limiter: {
        max: 1000,
        duration: 5000,
      },
      settings: {
        lockDuration: 300000,
      },
    };
  },
};
