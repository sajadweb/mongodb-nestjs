import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder()
    .setTitle('REST API')
    .setDescription('API developed throughout the API with NestJS course')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/', app, document);
  // app.enableVersioning({
  //   type: VersioningType.URI,
  // });
  await app.listen(3000);
  console.log(`App start in url ${await app.getUrl()}`);
}
bootstrap();
