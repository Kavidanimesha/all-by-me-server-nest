import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDrugDto } from './dto/create-drug.dto';
import { UpdateDrugDto } from './dto/update-drug.dto';
import { DrugDocument, DrugEntity } from './entities/drug.entity';

@Injectable()
export class DrugService {
  constructor(
    @InjectModel(DrugEntity.name)
    private readonly drugDB: Model<DrugDocument>,
  ) {}

  async create(createDrugDto: CreateDrugDto): Promise<DrugEntity> {
    const newDrug = new this.drugDB(createDrugDto);

    return await newDrug.save();
  }

  findAll() {
    return `This action returns all drug`;
  }

  findOne(id: number) {
    return `This action returns a #${id} drug`;
  }

  update(id: number, updateDrugDto: UpdateDrugDto) {
    return `This action updates a #${id} drug`;
  }

  remove(id: number) {
    return `This action removes a #${id} drug`;
  }
}
