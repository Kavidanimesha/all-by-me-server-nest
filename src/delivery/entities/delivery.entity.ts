import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type DeliveryDocument = DeliveryEntity & Document;

@Schema({ versionKey: false, collection: 'delivery', timestamps: true })
export class DeliveryEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String, unique: true })
  name: string;

  @Prop({ required: true, type: () => Number })
  phone: number;

  @Prop({ required: true, type: () => String })
  address: string;

  @Prop({ required: true, type: () => String })
  drugName: string;

  @Prop({ required: true, type: () => String })
  dose: string;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const DeliverySchema = SchemaFactory.createForClass(DeliveryEntity);
