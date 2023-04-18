import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type Pharmacy_cardDocument = Pharmacy_cardEntity & Document;

@Schema({ versionKey: false, collection: 'pharmacy_card', timestamps: true })
export class Pharmacy_cardEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String, unique: true })
  name: string;

  @Prop({ required: true, type: () => String })
  description: string;

  @Prop({ required: true, type: () => String })
  image: string;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const Pharmacy_cardSchema =
  SchemaFactory.createForClass(Pharmacy_cardEntity);
