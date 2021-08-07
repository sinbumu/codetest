import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseConnectorModule } from './mongoose-connector/mongoose-connector.module';
import { PatientModule } from './patient/patient.module';
import { VitalSignModule } from './vital-sign/vital-sign.module';
import { AlertModule } from './alert/alert.module';
import { AlertCriteriaModule } from './alert-criteria/alert-criteria.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseAllFeatureModule } from './mongoose-all-feature/mongoose-all-feature.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseConnectorModule,//몽고디비 커넥터 (전역)
    
    MongooseAllFeatureModule,//몽고디비 스키마 정의 연결 (전역)
    PatientModule,
    VitalSignModule,
    AlertModule,
    AlertCriteriaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
