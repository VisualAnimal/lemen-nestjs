// dto/update-cat.dto.ts
import { IsString, IsInt, Min, Max, IsOptional } from 'class-validator';

export class UpdateCatDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsInt()
  @Min(0)
  @Max(20)
  @IsOptional()
  readonly age?: number;

  @IsString()
  @IsOptional()
  readonly breed?: string;
}
