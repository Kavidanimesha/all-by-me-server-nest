import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { AdvertisementModule } from './advertisement/advertisement.module';
import { DrugModule } from './drug/drug.module';
import { SampleModule } from './sample/sample.module';

@Module({
  imports: [CommonModule, AdvertisementModule, DrugModule, SampleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
