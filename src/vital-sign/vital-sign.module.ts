import { forwardRef, Module } from '@nestjs/common';
import { VitalSignService } from './vital-sign.service';
import { VitalSignController } from './vital-sign.controller';
import { AlertCriteriaModule } from '../alert-criteria/alert-criteria.module';
import { AlertModule } from '../alert/alert.module';

@Module({
  imports:[
    forwardRef(() => AlertCriteriaModule),
    forwardRef(() => AlertModule),
  ],
  controllers: [VitalSignController],
  providers: [VitalSignService],
  exports:[VitalSignService]
})
export class VitalSignModule {}
