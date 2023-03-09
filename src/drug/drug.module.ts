import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DrugEntity, DrugSchema } from './entities/drug.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: DrugEntity.name,
        schema: DrugSchema,
      },
    ]),
  ],
  controllers: [DrugController],
  providers: [DrugService],
})
export class DrugModule {}
