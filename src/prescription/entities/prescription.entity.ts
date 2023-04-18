import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type PrescriptionDocument = PrescriptionEntity & Document;

@Schema({ versionKey: false, collection: 'prescription', timestamps: true })
export class PrescriptionEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String, unique: true })
  name: string;

  @Prop({ required: true, type: () => String })
  regNum: string;

  @Prop({ required: true, type: () => String })
  address: string;

  @Prop({ required: true, type: () => Number })
  age: number;

  @Prop({ required: true, type: () => String })
  nic: string;

  @Prop({ required: true, type: () => String })
  drugName: string;

  @Prop({ required: true, type: () => String })
  brandName: string;

  @Prop({ required: true, type: () => String })
  dosage: string;

  @Prop({ required: true, type: () => String })
  frequency: string;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const PrescriptionSchema =
  SchemaFactory.createForClass(PrescriptionEntity);
