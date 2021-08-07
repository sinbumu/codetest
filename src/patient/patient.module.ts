import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';

@Module({
  controllers: [PatientController],
  providers: [PatientService],
  exports: [PatientService]
})
export class PatientModule {}
