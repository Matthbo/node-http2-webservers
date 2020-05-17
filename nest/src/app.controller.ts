import { Controller, All, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path';

@Controller()
export class AppController {

  @All('html')
  getHtml(@Res() res: Response){
    res.sendFile(path.join(__dirname + '/../index.html'))
  }

  // All() catches all other requests
  @All()
  getJson() {
    return { status: 'Success', silly_html: 'https://localhost:8000/html'};
  }
}
