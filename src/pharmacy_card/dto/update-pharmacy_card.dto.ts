import { PartialType } from '@nestjs/mapped-types';
import { CreatePharmacy_cardDto } from './create-pharmacy_card.dto';

export class UpdatePharmacy_cardDto extends PartialType(
  CreatePharmacy_cardDto,
) {}
