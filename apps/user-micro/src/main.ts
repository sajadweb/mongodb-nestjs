import { NestFactory } from '@nestjs/core';
import { UserMicroModule } from './user-micro.module';

async function bootstrap() {
  const app = await NestFactory.create(UserMicroModule);
  await app.listen(
    process.env.USER_MICRO ? parseInt(process.env.USER_MICRO) : 3000,
  );
  console.log(`User Micro start in url ${await app.getUrl()}`);
}
bootstrap();
