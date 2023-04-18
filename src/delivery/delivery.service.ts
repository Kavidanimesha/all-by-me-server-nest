import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { DeliveryDocument, DeliveryEntity } from './entities/delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(DeliveryEntity.name)
    private readonly deliveryDB: Model<DeliveryDocument>,
  ) {}

  async create(createDeliveryDto: CreateDeliveryDto): Promise<DeliveryEntity> {
    const newDelivery = new this.deliveryDB(createDeliveryDto);

    return await newDelivery.save();
  }

  async findAll(): Promise<DeliveryEntity[]> {
    // manufacturer: string
    return await this.deliveryDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<DeliveryEntity> {
    return await this.deliveryDB.findById(id).exec();
  }

  async update(
    id: string,
    updateDeliveryDto: UpdateDeliveryDto,
  ): Promise<DeliveryEntity> {
    return await this.deliveryDB
      .findByIdAndUpdate(id, updateDeliveryDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<DeliveryEntity> {
    return await this.deliveryDB.findByIdAndDelete(id);
  }

  async findAllByManufacturer(manufacturer: string): Promise<DeliveryEntity[]> {
    return await this.deliveryDB.find({ manufacturer: manufacturer }).exec();
  }
}
