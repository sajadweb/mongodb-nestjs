declare const module: any;
import { NestFactory } from '@nestjs/core';
import { PostMicroModule } from './post-micro.module';
import { PostMicroConfig as opts } from '@libs/common';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostMicroModule,
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
