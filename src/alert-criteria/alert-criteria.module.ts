import { Module } from '@nestjs/common';
import { AlertCriteriaService } from './alert-criteria.service';
import { AlertCriteriaController } from './alert-criteria.controller';

@Module({
  controllers: [AlertCriteriaController],
  providers: [AlertCriteriaService],
  exports: [AlertCriteriaService]
})
export class AlertCriteriaModule {}
