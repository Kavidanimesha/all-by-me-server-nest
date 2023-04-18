import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsEnum,
  IsString,
  MaxLength,
} from 'class-validator';
import { MedicalSpecialties } from 'src/utils/constants';

export class CreateDoctorDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MaxLength(10)
  readonly phone: string[];

  @IsString()
  readonly licens: string;

  @IsString()
  readonly name: string;

  @IsEnum(MedicalSpecialties)
  readonly speciality: MedicalSpecialties;

  @IsBoolean()
  readonly sinhala: boolean;

  @IsBoolean()
  readonly tamil: boolean;

  @IsBoolean()
  readonly english: boolean;

  @IsString()
  readonly bio: string;

  @IsString()
  readonly hospital: string;

  @IsArray()
  readonly specializeTtreatments: string[];

  @IsArray()
  readonly educationQualifications: string[];
}
