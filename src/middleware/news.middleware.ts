import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class NewsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('news中间件');

    next();
  }
}
