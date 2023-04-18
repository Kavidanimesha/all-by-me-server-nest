import { IsEnum, IsNumber, IsString } from 'class-validator';
import {
  FrequencyArray,
  DosageArray,
  BrandArray,
  DrugArray,
} from 'src/utils/constants';

export class CreatePrescriptionDto {
  @IsString()
  readonly name: string;

  @IsEnum(FrequencyArray)
  readonly frequency: FrequencyArray;

  @IsEnum(DosageArray)
  readonly dosage: DosageArray;

  @IsEnum(DrugArray)
  readonly drugName: DrugArray;

  @IsEnum(BrandArray)
  readonly brandName: BrandArray;

  @IsString()
  readonly regNum: string;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly address: string;

  @IsString()
  readonly nic: string;
}
