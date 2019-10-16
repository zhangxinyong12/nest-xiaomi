import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewsController],
  providers: [AppService, UserService, NewsService],
})
export class AppModule {}
