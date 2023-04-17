import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type AdvertisementDocument = AdvertisementEntity & Document;

@Schema({ versionKey: false, collection: 'advertisements', timestamps: true })
export class AdvertisementEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String, unique: true })
  headline: string;

  @Prop({ type: () => String })
  shortDescription: string;

  @Prop({ type: () => String })
  image: string;

  // TODO: Add Image Later

  // @Prop({ type: () => Date, required: true })
  // adEndsIn: string;

  @Prop({ type: () => Boolean, required: true, default: true })
  isActive: boolean;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const AdvertisementSchema =
  SchemaFactory.createForClass(AdvertisementEntity);
