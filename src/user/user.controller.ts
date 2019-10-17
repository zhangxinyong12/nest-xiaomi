import { Body, Controller, Get, Param, Post, Query, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
    @Get()
    @Render('default/user') // 渲染模版引擎
    index() {
        return {
            name: 'zhangsan',
        };
    }
    // @Query 装饰器 获取url？后面的参数
    @Get('add')
    addData(@Req() query) {
        return query;
    }
    // @Request 获取完整的请求
    @Get('edit')
    editData(@Req() req: Request) {
        return req.query;
    }
    // @Body 获取传值
    @Post('create')
    create(@Body() body, @Res() res: Response) {
        // tslint:disable-next-line: no-console
        console.log(body);
        res.json({
            name: 'xxx123',
        });
        res.status(200).end();
        // res.redirect('/user');
    }
    // 动态路由
    @Get(':id')
    getId(@Param() param) {
        return param;
    }
}
