import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Pharmacy_cardService } from './pharmacy_card.service';
import { CreatePharmacy_cardDto } from './dto/create-pharmacy_card.dto';
import { UpdatePharmacy_cardDto } from './dto/update-pharmacy_card.dto';

@Controller('pharmacy_card')
export class Pharmacy_cardController {
  constructor(private readonly pharmacy_cardService: Pharmacy_cardService) {}

  @Post()
  create(@Body() createPharmacy_cardDto: CreatePharmacy_cardDto) {
    return this.pharmacy_cardService.create(createPharmacy_cardDto);
  }

  @Get()
  findAll() {
    return this.pharmacy_cardService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pharmacy_cardService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePharmacy_cardDto: UpdatePharmacy_cardDto,
  ) {
    return this.pharmacy_cardService.update(id, updatePharmacy_cardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pharmacy_cardService.remove(id);
  }
}
