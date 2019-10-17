import { Controller, Post, UseInterceptors, Body, UploadedFile, UploadedFiles } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { SaveService } from './save/save.service';

@Controller('upload')
export class UploadController {
    constructor(
        private saveService: SaveService
    ) {

    }
    // 文件上传
    @Post('upload')
    @UseInterceptors(FileInterceptor('file')) // 注意字段
    uploadFile(@UploadedFile() file) {
        this.saveService.save(file);
        return {
            fileList: file,
        };
    }
    // 多文件上传
    @Post('userImg')
    // FilesInterceptor 字段一样的时候
    @UseInterceptors(FilesInterceptor('face'))
    // FileFieldsInterceptor 分别定义字段
    // @UseInterceptors(FileFieldsInterceptor([
    //     { name: 'face', maxCount: 3 }
    // ]))
    userImg(@Body() body, @UploadedFiles() imgList) {
        console.log(body);
        console.log(imgList);
        imgList.forEach(file => {
            this.saveService.save(file);
        });
        return {
            success: true
        };
    }
}
