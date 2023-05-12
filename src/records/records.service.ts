import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateRecordsDto } from './dto/create-record.dto';
import { UpdateRecordsDto } from './dto/update-record.dto';
import { RecordsDocument, RecordsEntity } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(RecordsEntity.name)
    private readonly recordsDB: Model<RecordsDocument>,
  ) {}

  async create(createRecordsDto: CreateRecordsDto): Promise<RecordsEntity> {
    const newRecords = new this.recordsDB(createRecordsDto);

    return await newRecords.save();
  }

  async findAll(): Promise<RecordsEntity[]> {
    return await this.recordsDB.find({ isDeleted: false }).exec();
  }

  async reportData() {
    return 'msg: hi';
  }

  async findOne(id: string | ObjectId): Promise<RecordsEntity> {
    const foundRecords = await this.recordsDB.findById(id).exec();

    if (!foundRecords)
      throw new HttpException(
        `Records not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    // Check whether advertisement is deleted
    if (foundRecords.isDeleted)
      throw new HttpException(
        `Records not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return foundRecords;
  }

  async update(updateRecordsDto: UpdateRecordsDto): Promise<RecordsEntity> {
    const foundRecords = await this.recordsDB
      .findById(updateRecordsDto.id)
      .exec();

    if (!foundRecords)
      throw new HttpException(
        `Records not found for id ${updateRecordsDto.id}`,
        HttpStatus.NOT_FOUND,
      );

    return await this.recordsDB
      .findByIdAndUpdate(updateRecordsDto.id, updateRecordsDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string | ObjectId): Promise<RecordsEntity> {
    const foundRecords = await this.recordsDB.findById(id).exec();

    if (!foundRecords)
      throw new HttpException(
        `Records not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return await this.recordsDB
      .findByIdAndUpdate(
        id,
        { isDeleted: true },
        {
          upsert: true,
          new: true,
        },
      )
      .exec();
  }

  async getAllHearRates(): Promise<RecordsEntity[]> {
    return await this.recordsDB.find({}).select('heartRate');
  }
}
