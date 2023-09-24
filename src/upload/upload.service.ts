import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadService {
  saveFile(file): string {
    // 这里可以实现文件保存逻辑，例如保存到数据库或者其他存储中
    // 返回一个标识，例如文件URL或ID
    return file.filename;
  }
}
