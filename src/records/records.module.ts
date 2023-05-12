import { Module } from '@nestjs/common';
import { RecordsService } from './records.service';
import { RecordsController } from './records.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsEntity, RecordsSchema } from './entities/record.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: RecordsEntity.name,
        schema: RecordsSchema,
      },
    ]),
  ],
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule {}
