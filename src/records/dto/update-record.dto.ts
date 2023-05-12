import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateRecordsDto } from './create-record.dto';

export class UpdateRecordsDto extends PartialType(CreateRecordsDto) {
  @IsString()
  readonly id: string;
}
