import { UserMiddleware } from './middleware/user.middleware';
import { LogMiddleware } from './middleware/log.middleware';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { UploadController } from './upload/upload.controller';
import { SaveService } from './upload/save/save.service';
import { LogController } from './log/log.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UserController,
    NewsController,
    UploadController,
    LogController,
  ],
  providers: [
    AppService,
    UserService,
    NewsService,
    SaveService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes(
        { path: 'log', method: RequestMethod.ALL },
        { path: 'create', method: RequestMethod.ALL },
        { path: 'user', method: RequestMethod.POST },
      )
      .apply(UserMiddleware)
      .forRoutes(
        { path: '*', method: RequestMethod.ALL }
      )
  }
}
