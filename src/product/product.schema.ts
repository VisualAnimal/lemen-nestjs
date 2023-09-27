import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string; // 新增的描述属性

  @Prop()
  price: string; // 新增的价格属性

  @Prop()
  category: string; // 新增的类别属性

  @Prop()
  remainingQuantity: number;

  @Prop()
  imageUrl: string; // 新增的图片属性

  @Prop([{ name: String, type: String }])
  tags: Array<{ name: string, type: string }>;

  @Prop()
  out_of_stock: boolean;

  // @Prop()
  // filename: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
