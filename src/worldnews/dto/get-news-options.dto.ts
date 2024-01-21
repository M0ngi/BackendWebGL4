import { IsOptional, IsString } from "class-validator";

export class GetNewsOptions {
  @IsString()
  @IsOptional()
  page?: string;

  @IsString()
  @IsOptional()
  lang?: string;
}