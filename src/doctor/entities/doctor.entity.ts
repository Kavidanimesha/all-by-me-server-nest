import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongoose';

export type DoctorDocument = DoctorEntity & Document;

@Schema({ versionKey: false, collection: 'doctor', timestamps: true })
export class DoctorEntity {
  _id: ObjectId;

  @Prop({ required: true, type: () => String })
  name: string;

  @Prop({ required: true, type: () => String })
  email: string;

  @Prop({ required: true, type: () => String })
  phone: string;

  @Prop({ required: true, type: () => String })
  licens: string;

  @Prop({ required: true, type: () => String })
  speciality: string;

  @Prop({ required: true, type: () => [String] })
  educationQualifications: string[];

  @Prop({ required: true, type: () => [String] })
  specializeTtreatments: string[];

  @Prop({ required: true, type: () => String })
  hospital: string;

  @Prop({ required: true, type: () => String })
  bio: string;

  @Prop({ required: true, type: () => Boolean })
  sinhala: boolean;

  @Prop({ required: true, type: () => Boolean })
  tamil: boolean;

  @Prop({ required: true, type: () => Boolean })
  english: boolean;

  @Prop({ type: () => Boolean, required: true, default: false })
  isDeleted: boolean;

  @Prop({ type: () => Date })
  createdAt: string;

  @Prop({ type: () => Date })
  updatedAt: string;
}

export const DoctorSchema = SchemaFactory.createForClass(DoctorEntity);
