// dto/create-cat.dto.ts
import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  readonly name: string;
}
