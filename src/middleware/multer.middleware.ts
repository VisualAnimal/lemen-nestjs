// multer.middleware.ts

import { Injectable, NestMiddleware } from '@nestjs/common';
import * as multer from 'multer';

@Injectable()
export class MulterMiddleware implements NestMiddleware {
  constructor() {}

  use(req, res, next) {
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, './files'); // 设置保存文件的目录
      },
      filename: (req, file, cb) => {
        cb(null, file.originalname); // 设置文件的原始名称作为保存的文件名
      },
    });
    
    const upload = multer({ storage }).single('file');
    
    // const storage = multer.memoryStorage();
    // const upload = multer({ storage }).single('file'); // 'file' 是上传文件的字段名称

    upload(req, res, function (err) {
      if (err) {
        return res.status(400).json({ message: '文件上传失败' });
      }
      next();
    });
  }
}
