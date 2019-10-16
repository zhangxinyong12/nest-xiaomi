import { Controller, Get, Query, Request, Post, Body, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    index() {
        return '用户中心';
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
    create(@Body() body) {
        return body;
    }
    // 动态路由
    @Get(":id")
    getId(@Param() param) {
        return param;
    }
}
