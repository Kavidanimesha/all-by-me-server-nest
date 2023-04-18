import { IsNumber, IsString } from 'class-validator';

export class CreateDeliveryDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly phone: number;

  @IsString()
  readonly address: string;

  @IsString()
  readonly drugName: string;

  @IsString()
  readonly dose: string;
}
