declare const module: any;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserMicroConfig as opts } from '@libs/common/config/user.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    opts(),
  );
  console.log(opts());
  await app.listen();
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`User Micro start in url ${opts().options?.port}`);
}
bootstrap();
