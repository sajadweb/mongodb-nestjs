## Template engines
Pug: Haml-inspired template engine (formerly Jade).
Haml.js: Haml implementation.
EJS: Embedded JavaScript template engine.
hbs: Adapter for Handlebars.js, an extension of Mustache.js template engine.
Squirrelly: Blazing-fast template engine that supports partials, helpers, custom tags, filters, and caching. Not white-space sensitive, works with any language.
Eta: Super-fast lightweight embedded JS template engine. Supports custom delimiters, async, whitespace control, partials, caching, plugins.
combyne.js: A template engine that hopefully works the way you’d expect.
Nunjucks: Inspired by jinja/twig.
marko: A fast and lightweight HTML-based templating engine that compiles templates to CommonJS modules and supports streaming, async rendering and custom tags. (Renders directly to the HTTP response stream).
whiskers: Small, fast, mustachioed.
Blade: HTML Template Compiler, inspired by Jade & Haml.
Haml-Coffee: Haml templates where you can write inline CoffeeScript.
express-hbs: Handlebars with layouts, partials and blocks for express 3 from Barc.
express-handlebars: A Handlebars view engine for Express which doesn’t suck.
express-views-dom: A DOM view engine for Express.
rivets-server: Render Rivets.js templates on the server.
LiquidJS: A simple, expressive and safe template engine.
express-tl: A template-literal engine implementation for Express.
Twing: First-class Twig engine for Node.js.
Sprightly: A very light-weight JS template engine (45 lines of code), that consists of all the bare-bones features that you want to see in a template engine.
html-express-js: A small template engine for those that want to just serve static or dynamic HTML pages using native JavaScript.


## hbs: Adapter for Handlebars.js, an extension of Mustache.js template engine.

## install microservice view
```bash
nest g app View
```
### add 
```bash hbs
npm install hbs
```
### main.js
```ts
  app.useStaticAssets(join(__dirname, '../../..', '/resources/public'));
  app.setBaseViewsDir(join(__dirname, '../../..', '/resources/view'));
  hbs.registerPartials(
    join(__dirname, '../../..', '/resources/view/partials/'),
  );
  hbs.registerHelper('toFixed', function (str: number) {
    if (!str) {
      return '0.0';
    }
    return str.toFixed(1);
  });
  hbs.registerHelper('toDate', function (date: string) {
    const d = new Date(date);
    return `${d.getMonth()} ${d.getDate()},${d.getFullYear()}`;
  });
```

## Links
https://expressjs.com/en/resources/template-engines.html
https://handlebarsjs.com/guide/#partials

## end lesson 11