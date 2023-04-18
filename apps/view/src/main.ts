declare const module: any;
import { NestFactory } from '@nestjs/core';
import { ViewModule } from './view.module';
import { join } from 'path';
import * as hbs from 'hbs';
import * as session from 'express-session';
import flash = require('connect-flash');
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create<any>(ViewModule);
  app.useStaticAssets(join(__dirname, '../../..', '/resources/public'));
  app.setBaseViewsDir(join(__dirname, '../../..', '/resources/view'));
  hbs.registerPartials(
    join(__dirname, '../../..', '/resources/view/partials/'),
  );
  hbs.registerHelper('toFixed', function (str: number | string) {
    if (!str) {
      return '0.0';
    }
    if (typeof str === 'number') return str.toFixed(1);
    return parseFloat(str).toFixed(1);
  });
  hbs.registerHelper('toDate', function (date: string) {
    const d = new Date(date);
    return `${d.getMonth()} ${d.getDate()},${d.getFullYear()}`;
  });
  app.setViewEngine('hbs');
  app.use(
    session({
      secret: process.env.SECRET_KEY,
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
  await app.listen(process.env.VIEW_MICRO);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
  console.log(`View Application is running on: ${await app.getUrl()}`);
}
bootstrap();
