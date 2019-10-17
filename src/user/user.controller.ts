import { Body, Controller, Get, Param, Post, Query, Render, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
    @Get()
    @Render('default/upload') // 渲染模版引擎
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
    @Get(':id/:name')
    getId(@Param() param) {
        return param;
    }
    // post form-data  Multer 是用于处理 multipart/form-data 的中间件 ，主要用于上传文件。
    // Multer 不会处理任何不是 multipart（multipart/form-data）的表单。此外，这个包不适用于 FastifyAdapter。
    @Post('postFormData')
    @UseInterceptors(FileInterceptor('file'))
    postFormData(@Body() body) {
        // 获取不是上传文件，但是form-data形式的
        return {
            body: { ...body },
            susccess: 200,
        };
    }
    // 文件上传
    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) { // 注意字段
        return {
            fileList: file,
        };
    }
}
