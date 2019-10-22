import { Controller, Get, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('log')
export class LogController {
    @Get()
    get(@Res() res: Response) {
        res.send('log 路由模块');
    }
}
