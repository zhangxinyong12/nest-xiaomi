import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { NewsService } from './news/news.service';
import { NewsController } from './news/news.controller';
import { UploadController } from './upload/upload.controller';
import { SaveService } from './upload/save/save.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, NewsController, UploadController],
  providers: [AppService, UserService, NewsService, SaveService],
})
export class AppModule {}
