import { Module } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { ChannelController } from './channel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChannelEntity, ChannelSchema } from './entities/channel.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: ChannelEntity.name,
        schema: ChannelSchema,
      },
    ]),
  ],
  controllers: [ChannelController],
  providers: [ChannelService],
})
export class ChannelModule {}
