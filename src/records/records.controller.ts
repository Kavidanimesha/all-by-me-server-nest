import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordsDto } from './dto/create-record.dto';
import { UpdateRecordsDto } from './dto/update-record.dto';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post()
  create(@Body() createRecordsDto: CreateRecordsDto) {
    return this.recordsService.create(createRecordsDto);
  }

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get('/heart-rate')
  findAllHeartRates() {
    return this.recordsService.getAllHearRates();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(id);
  }

  @Get('reportData')
  reportData() {
    return { msg: 'hi' };
  }

  @Patch()
  update(@Body() updateRecordsDto: UpdateRecordsDto) {
    return this.recordsService.update(updateRecordsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(id);
  }
}
