import { Module } from '@nestjs/common';
import { AdvertisementService } from './advertisement.service';
import { AdvertisementController } from './advertisement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AdvertisementEntity,
  AdvertisementSchema,
} from './entities/advertisement.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AdvertisementEntity.name,
        schema: AdvertisementSchema,
      },
    ]),
  ],
  controllers: [AdvertisementController],
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
