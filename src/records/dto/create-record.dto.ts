import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRecordsDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly nic: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsString()
  readonly image: string;

  @IsString()
  readonly bloodPresure: string;

  @IsNumber()
  readonly heartRate: number;

  @IsString()
  readonly respiratoryRate: string;

  @IsString()
  readonly tempreture: string;
}
