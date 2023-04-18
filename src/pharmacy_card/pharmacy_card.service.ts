import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePharmacy_cardDto } from './dto/create-pharmacy_card.dto';
import { UpdatePharmacy_cardDto } from './dto/update-pharmacy_card.dto';
import {
  Pharmacy_cardDocument,
  Pharmacy_cardEntity,
} from './entities/pharmacy_card.entity';

@Injectable()
export class Pharmacy_cardService {
  constructor(
    @InjectModel(Pharmacy_cardEntity.name)
    private readonly pharmacy_cardDB: Model<Pharmacy_cardDocument>,
  ) {}

  async create(
    createPharmacy_cardDto: CreatePharmacy_cardDto,
  ): Promise<Pharmacy_cardEntity> {
    const newPharmacy_card = new this.pharmacy_cardDB(createPharmacy_cardDto);

    return await newPharmacy_card.save();
  }

  async findAll(): Promise<Pharmacy_cardEntity[]> {
    // manufacturer: string
    return await this.pharmacy_cardDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<Pharmacy_cardEntity> {
    return await this.pharmacy_cardDB.findById(id).exec();
  }

  async update(
    id: string,
    updatePharmacy_cardDto: UpdatePharmacy_cardDto,
  ): Promise<Pharmacy_cardEntity> {
    return await this.pharmacy_cardDB
      .findByIdAndUpdate(id, updatePharmacy_cardDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<Pharmacy_cardEntity> {
    return await this.pharmacy_cardDB.findByIdAndDelete(id);
  }
}
