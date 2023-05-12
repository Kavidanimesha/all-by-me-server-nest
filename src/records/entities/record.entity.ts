import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type RecordsDocument = RecordsEntity & Document;

@Schema({ versionKey: false, collection: 'records', timestamps: true })
export class RecordsEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String })
  name: string;

  @Prop({ type: () => String })
  nic: string;

  @Prop({ type: () => String })
  address: string;

  @Prop({ type: () => String })
  phone: string;

  @Prop({ type: () => String })
  tempreture: string;

  @Prop({ type: () => String })
  respiratoryRate: string;

  @Prop({ type: () => String })
  bloodPresure: string;

  @Prop({ type: () => Number })
  heartRate: number;

  @Prop({ type: () => String, unique: true })
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

export const RecordsSchema = SchemaFactory.createForClass(RecordsEntity);
