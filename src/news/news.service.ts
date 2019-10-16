import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    findAll() {
        const list = [
            { title: '新闻1' },
            { title: '新闻2' },
            { title: '新闻3' },
            { title: '新闻4' },
        ];
        return list;
    }
}
