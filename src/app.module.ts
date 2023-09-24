import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CategoryModule } from './category/category.module';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { UploadModule } from './upload/upload.module';

@Module({
  // imports: [CategoryModule, CatModule],
  imports: [CatModule, MongooseModule.forRoot('mongodb://127.0.0.1/project07'), CategoryModule, ProductModule, UploadModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
