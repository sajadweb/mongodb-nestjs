declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PostMicroConfig as opts } from '@libs/common';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    opts(),
  );
  await app.listen();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`Post Micro start in url ${opts().options?.url}`);
}
bootstrap();
