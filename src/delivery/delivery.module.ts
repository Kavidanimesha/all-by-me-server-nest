import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryEntity, DeliverySchema } from './entities/delivery.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DeliveryEntity.name,
        schema: DeliverySchema,
      },
    ]),
  ],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
