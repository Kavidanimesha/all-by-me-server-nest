import { Module } from '@nestjs/common';
import { Pharmacy_cardService } from './pharmacy_card.service';
import { Pharmacy_cardController } from './pharmacy_card.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Pharmacy_cardEntity,
  Pharmacy_cardSchema,
} from './entities/pharmacy_card.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pharmacy_cardEntity.name,
        schema: Pharmacy_cardSchema,
      },
    ]),
  ],
  controllers: [Pharmacy_cardController],
  providers: [Pharmacy_cardService],
})
export class Pharmacy_cardModule {}
