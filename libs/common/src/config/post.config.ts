import { Transport } from '@nestjs/microservices';
export const PostMicroConfig: any = () => {
  return {
    transport: Transport.REDIS,
    options: {
      url: process.env.POST_REDIS_URL,
    },
  };
};
