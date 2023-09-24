  // category.module.ts
  import { Module } from '@nestjs/common';
  import { MongooseModule } from '@nestjs/mongoose';
  import { Category,CategorySchema } from './category.schema';
  import { CategorysController } from './category.controller';
  import { CategoryService } from './category.service';
  @Module({
    imports: [MongooseModule.forFeature([{ name: Category.name, schema: CategorySchema }])],
    controllers: [CategorysController],
    providers: [CategoryService],
  })
  export class CategoryModule {}
