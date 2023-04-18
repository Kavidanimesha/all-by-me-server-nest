import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ChannelDocument, ChannelEntity } from './entities/channel.entity';

@Injectable()
export class ChannelService {
  constructor(
    @InjectModel(ChannelEntity.name)
    private readonly channelDB: Model<ChannelDocument>,
  ) {}

  async create(createChannelDto: CreateChannelDto): Promise<ChannelEntity> {
    const newChannel = new this.channelDB(createChannelDto);

    return await newChannel.save();
  }

  async findAll(): Promise<ChannelEntity[]> {
    // manufacturer: string
    return await this.channelDB
      // .find({ manufacturer: manufacturer })
      .find()
      .exec();
  }

  async findOne(id: string): Promise<ChannelEntity> {
    return await this.channelDB.findById(id).exec();
  }

  async update(
    id: string,
    UpdateChannelDto: UpdateChannelDto,
  ): Promise<ChannelEntity> {
    return await this.channelDB
      .findByIdAndUpdate(id, UpdateChannelDto, {
        upsert: true,
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<ChannelEntity> {
    return await this.channelDB.findByIdAndDelete(id);
  }
}
