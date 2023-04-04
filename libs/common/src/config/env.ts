import { ConfigModule } from '@nestjs/config';

export const getEnvironments = (name = '.env') => {
  return ConfigModule.forRoot({
    envFilePath: [name],
    isGlobal: true,
  });
};
