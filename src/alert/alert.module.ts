import { Module } from '@nestjs/common';
import { AlertService } from './alert.service';
import { AlertController } from './alert.controller';
import { AlertCriteriaModule } from 'src/alert-criteria/alert-criteria.module';

@Module({
  imports: [AlertCriteriaModule],
  controllers: [AlertController],
  providers: [AlertService]
})
export class AlertModule {}
