import { Module } from '@nestjs/common';
import { PrescriptionService } from './prescription.service';
import { PrescriptionController } from './prescription.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PrescriptionEntity,
  PrescriptionSchema,
} from './entities/prescription.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PrescriptionEntity.name,
        schema: PrescriptionSchema,
      },
    ]),
  ],
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
})
export class PrescriptionModule {}
