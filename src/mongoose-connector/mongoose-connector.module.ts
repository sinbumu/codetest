import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Global()
@Module({
    imports:[MongooseModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          uri: configService.get<string>('MONGO_URL'), //.env에 환경변수를 넣자.
          useCreateIndex: true,
        }),
        inject: [ConfigService],
      })]
})
export class MongooseConnectorModule {}
