import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConnectorModule } from './mongoose-connector/mongoose-connector.module';

@Module({
  imports: [
    MongooseConnectorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
