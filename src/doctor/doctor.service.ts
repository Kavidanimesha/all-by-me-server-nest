import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { DoctorDocument, DoctorEntity } from './entities/doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectModel(DoctorEntity.name)
    private readonly doctorDB: Model<DoctorDocument>,
  ) {}

  async create(createDoctorDto: CreateDoctorDto): Promise<DoctorEntity> {
    const newDoctor = new this.doctorDB(createDoctorDto);

    return await newDoctor.save();
  }

  async findAll(): Promise<DoctorEntity[]> {
    // manufacturer: string
    return await this.doctorDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<DoctorEntity> {
    return await this.doctorDB.findById(id).exec();
  }

  async update(
    id: string,
    updateDoctorDto: UpdateDoctorDto,
  ): Promise<DoctorEntity> {
    return await this.doctorDB
      .findByIdAndUpdate(id, updateDoctorDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }
  async remove(id: string): Promise<DoctorEntity> {
    return await this.doctorDB.findByIdAndDelete(id);
  }
}
