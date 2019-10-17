import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 静态资源目录
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: '/static/', // 设置虚拟路径
  });

  // 配置魔板引擎 ejs
  app.setBaseViewsDir('views');
  app.setViewEngine('ejs');
  // Nestjs 使用cookie cookie-parser
  // 加密cookie
  app.use(cookieParser('jiamicookie'));
  // 使用session
  app.use(session({
    secret: '加密的key',
    cookie: {
      maxAge: 1000 * 60 * 60,
      httpOnly: true,
    },
    rolling: true // 每次重新设置cookie 过期时间
  }));

  await app.listen(3000, () => {
    console.log('3000 端口启动成功');
  });
}
bootstrap();
