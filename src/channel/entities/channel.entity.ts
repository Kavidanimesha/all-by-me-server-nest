import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type ChannelDocument = ChannelEntity & Document;

@Schema({ versionKey: false, collection: 'channel', timestamps: true })
export class ChannelEntity {
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

export const ChannelSchema = SchemaFactory.createForClass(ChannelEntity);
