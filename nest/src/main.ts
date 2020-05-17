import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
//import * as http2 from 'http2';
import * as spdy from 'spdy';
import * as fs from 'fs';
import { AppModule } from './app.module';

async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  await app.init();
  
  spdy.createServer({
    key: fs.readFileSync('./tls/localhost.key'),
    cert: fs.readFileSync('./tls/localhost.crt')
  }, server).listen(8000, () => console.log('Started Nest server (using SPDY) on https://localhost:8000'))
}
bootstrap();
