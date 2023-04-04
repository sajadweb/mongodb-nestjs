import { Transport } from '@nestjs/microservices';
export const UserMicroConfig: any = () => {
  return {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.USER_MICRO, 10),
    },
  };
};
