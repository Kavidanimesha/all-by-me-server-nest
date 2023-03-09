import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type DrugDocument = DrugEntity & Document;

@Schema({ versionKey: false, collection: 'drugs', timestamps: true })
export class DrugEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String, unique: true })
  name: string;

  @Prop({ required: true, type: () => String })
  description: string;

  @Prop({ required: true, type: () => String })
  manufacturer: string;

  @Prop({ required: true, type: () => [String] })
  dosages: string[];

  @Prop({ required: true, type: () => String })
  category: string;

  @Prop({ required: true, type: () => String })
  manufactureDate: string;

  @Prop({ required: true, type: () => String })
  expireDate: string;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const DrugSchema = SchemaFactory.createForClass(DrugEntity);
