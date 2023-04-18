import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { DrugModule } from './drug/drug.module';
import { SampleModule } from './sample/sample.module';
import { DoctorModule } from './doctor/doctor.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { Pharmacy_cardModule } from './pharmacy_card/pharmacy_card.module';
import { ChannelModule } from './channel/channel.module';
import { DeliveryModule } from './delivery/delivery.module';

@Module({
  imports: [
    CommonModule,
    AdvertisementModule,
    DrugModule,
    SampleModule,
    DoctorModule,
    PrescriptionModule,
    Pharmacy_cardModule,
    ChannelModule,
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
