import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { AdvertisementServiceInterface } from 'src/service/service.advertisement';
import { CreateAdvertisementDto } from './dto/create-advertisement.dto';
import { UpdateAdvertisementDto } from './dto/update-advertisement.dto';
import {
  AdvertisementDocument,
  AdvertisementEntity,
} from './entities/advertisement.entity';

@Injectable()
export class AdvertisementService implements AdvertisementServiceInterface {
  constructor(
    @InjectModel(AdvertisementEntity.name)
    private readonly advertisementDB: Model<AdvertisementDocument>,
  ) {}

  async create(
    createAdvertisementDto: CreateAdvertisementDto,
  ): Promise<AdvertisementEntity> {
    const newAdvertisement = new this.advertisementDB(createAdvertisementDto);

    return await newAdvertisement.save();
  }

  async findAll(): Promise<AdvertisementEntity[]> {
    return await this.advertisementDB.find({ isDeleted: false }).exec();
  }

  async findOne(id: string | ObjectId): Promise<AdvertisementEntity> {
    const foundAdvertisement = await this.advertisementDB.findById(id).exec();

    if (!foundAdvertisement)
      throw new HttpException(
        `Advertisement not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    // Check whether advertisement is deleted
    if (foundAdvertisement.isDeleted)
      throw new HttpException(
        `Advertisement not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return foundAdvertisement;
  }

  async update(
    updateAdvertisementDto: UpdateAdvertisementDto,
  ): Promise<AdvertisementEntity> {
    const foundAdvertisement = await this.advertisementDB
      .findById(updateAdvertisementDto.id)
      .exec();

    if (!foundAdvertisement)
      throw new HttpException(
        `Advertisement not found for id ${updateAdvertisementDto.id}`,
        HttpStatus.NOT_FOUND,
      );

    return await this.advertisementDB
      .findByIdAndUpdate(updateAdvertisementDto.id, updateAdvertisementDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string | ObjectId): Promise<AdvertisementEntity> {
    const foundAdvertisement = await this.advertisementDB.findById(id).exec();

    if (!foundAdvertisement)
      throw new HttpException(
        `Advertisement not found for id ${id}`,
        HttpStatus.NOT_FOUND,
      );

    return await this.advertisementDB
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
}
