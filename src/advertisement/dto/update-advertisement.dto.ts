import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateAdvertisementDto } from './create-advertisement.dto';

export class UpdateAdvertisementDto extends PartialType(
  CreateAdvertisementDto,
) {
  @IsString()
  readonly id: string;
}
