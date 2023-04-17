import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DrugService } from './drug.service';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';

@Controller('drug')
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @Post()
  create(@Body() createDrugDto: CreateDrugDto) {
    return this.drugService.create(createDrugDto);
  }

  // Query param www.google.com/hello?price=560&type=2
  // Path param www.google.com/hello
  // @Get()
  // getDrugsByPrice(@Query("price") price: number) {
  //   return this.drugService.drugsByPrice(price);
  // }

  @Get()
  findAll() {
    return this.drugService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drugService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrugDto: UpdateDrugDto) {
    return this.drugService.update(id, updateDrugDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drugService.remove(id);
  }
}
