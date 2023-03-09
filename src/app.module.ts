import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { DrugModule } from './drug/drug.module';

@Module({
  imports: [CommonModule, AdvertisementModule, DrugModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
