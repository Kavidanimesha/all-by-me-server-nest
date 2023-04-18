import { Module } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { DoctorController } from './doctor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorEntity, DoctorSchema } from './entities/doctor.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DoctorEntity.name,
        schema: DoctorSchema,
      },
    ]),
  ],
  controllers: [DoctorController],
  providers: [DoctorService],
})
export class DoctorModule {}
