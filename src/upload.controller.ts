// upload.controller.ts

import { Controller, Post, Req, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as fs from 'fs';

@Controller('uploads')
export class UploadController {
  @Post('file')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    // 处理上传的文件
    try {
      // 保存到磁盘或数据库等
      // 例如：fs.writeFileSync('path-to-save/' + file.originalname, file.buffer);
    //   fs.writeFileSync('path-to-save/' + file.originalname, file.buffer);
      return { message: '文件上传成功' };
    } catch (error) {
      return { message: '文件上传失败' };
    }
  }
}
