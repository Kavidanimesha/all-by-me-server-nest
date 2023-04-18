import { IsString } from 'class-validator';

export class CreatePharmacy_cardDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsString()
  readonly image: string;
}
