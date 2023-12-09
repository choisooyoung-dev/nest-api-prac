// DTO: Data Transfer Object

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  @IsString({ each: false })
  @IsOptional()
  readonly genres: string[];
}
