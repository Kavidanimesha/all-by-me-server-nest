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

  async findAll(): Promise<DrugEntity[]> {
    // manufacturer: string
    return await this.drugDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<DrugEntity> {
    return await this.drugDB.findById(id).exec();
  }

  async update(id: string, updateDrugDto: UpdateDrugDto): Promise<DrugEntity> {
    return await this.drugDB
      .findByIdAndUpdate(id, updateDrugDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<DrugEntity> {
    return await this.drugDB.findByIdAndDelete(id);
  }

  async findAllByManufacturer(manufacturer: string): Promise<DrugEntity[]> {
    return await this.drugDB.find({ manufacturer: manufacturer }).exec();
  }
}
