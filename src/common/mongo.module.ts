import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) =>
        // configService.get<string>('MONGODB_URL'),
        ({
          uri: 'mongodb://127.0.0.1:27017/all-by-me',
          // dbName: configService.get<string>('MONGODB_NAME'),
        }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoModule {}
