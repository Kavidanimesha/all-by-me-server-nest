import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAdvertisementDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  readonly headline: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  readonly shortDescription: string;

  // Date Validation Here
  // readonly adEndsIn: string;
}
