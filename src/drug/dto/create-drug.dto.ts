import { IsArray, IsEnum, IsString } from 'class-validator';
import { MedicineCategory } from 'src/utils/constants';

export class CreateDrugDto {
  @IsString()
  readonly name: string;

  @IsArray()
  readonly dosages: string[];

  @IsString()
  readonly manufacturer: string;

  @IsEnum(MedicineCategory)
  readonly category: MedicineCategory;

  @IsString()
  readonly description: string;

  @IsString()
  readonly manufactureDate: string;

  @IsString()
  readonly expireDate: string;
}
