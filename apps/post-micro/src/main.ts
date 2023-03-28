import { NestFactory } from '@nestjs/core';
import { PostMicroModule } from './post-micro.module';

async function bootstrap() {
  const app = await NestFactory.create(PostMicroModule);
  await app.listen(3000);
}
bootstrap();
