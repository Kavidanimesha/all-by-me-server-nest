import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePrescriptionDto } from './dto/create-prescription.dto';
import { UpdatePrescriptionDto } from './dto/update-prescription.dto';
import {
  PrescriptionDocument,
  PrescriptionEntity,
} from './entities/prescription.entity';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectModel(PrescriptionEntity.name)
    private readonly prescriptionDB: Model<PrescriptionDocument>,
  ) {}

  async create(
    createPrescriptionDto: CreatePrescriptionDto,
  ): Promise<PrescriptionEntity> {
    const newDrug = new this.prescriptionDB(createPrescriptionDto);

    return await newDrug.save();
  }

  async findAll(): Promise<PrescriptionEntity[]> {
    // manufacturer: string
    return await this.prescriptionDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<PrescriptionEntity> {
    return await this.prescriptionDB.findById(id).exec();
  }

  async update(
    id: string,
    updatePrescriptionDto: UpdatePrescriptionDto,
  ): Promise<PrescriptionEntity> {
    return await this.prescriptionDB
      .findByIdAndUpdate(id, updatePrescriptionDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<PrescriptionEntity> {
    return await this.prescriptionDB.findByIdAndDelete(id);
  }
}
