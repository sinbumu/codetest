import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConnectorModule } from './mongoose-connector/mongoose-connector.module';
import { PatientModule } from './patient/patient.module';
import { VitalSignModule } from './vital-sign/vital-sign.module';
import { AlertModule } from './alert/alert.module';
import { AlertCriteriaModule } from './alert-criteria/alert-criteria.module';
import { AlertCriteriaModule } from './alert-criteria/alert-criteria.module';

@Module({
  imports: [
    MongooseConnectorModule,
    PatientModule,
    VitalSignModule,
    AlertModule,
    AlertCriteriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
