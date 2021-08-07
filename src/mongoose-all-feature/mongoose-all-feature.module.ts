import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlertCriteria, AlertCriteriaSchema } from '../alert-criteria/model/alert-criteria.schema';
import { Alert, AlertSchema } from '../alert/model/alert.schema';
import { Patient, PatientSchema } from '../patient/model/patient.schema';
import { VitalSign, VitalSignSchema } from '../vital-sign/model/vital-sign';

@Global()
@Module({
    imports: [
      MongooseModule.forFeature([
        { name: Patient.name, schema: PatientSchema },
        { name: Alert.name, schema: AlertSchema },
        { name: AlertCriteria.name, schema: AlertCriteriaSchema },
        { name: VitalSign.name, schema: VitalSignSchema },
      ])
    ],
    exports:[MongooseModule]
})
export class MongooseAllFeatureModule {}
