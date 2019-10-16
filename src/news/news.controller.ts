import { Controller, Get, Render } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(
        private newsService: NewsService
    ) { }
    @Get()
    @Render('default/news')
    findAll() {
        const list = this.newsService.findAll();
        return { list };
    }
}
