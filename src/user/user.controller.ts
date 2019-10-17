import { Controller, Get, Query, Request, Post, Body, Param, Render, Response } from '@nestjs/common';

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
    addData(@Query() query) {
        return query;
    }
    // @Request 获取完整的请求
    @Get('edit')
    editData(@Request() req) {
        return req.query;
    }
    // @Body 获取传值
    @Post('create')
    create(@Body() body, @Response() res) {
        // tslint:disable-next-line: no-console
        console.log(body);
        res.redirect('/user');
    }
    // 动态路由
    @Get(':id')
    getId(@Param() param) {
        return param;
    }
}
