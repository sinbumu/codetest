import { Module } from '@nestjs/common';
import { VitalSignService } from './vital-sign.service';
import { VitalSignController } from './vital-sign.controller';

@Module({
  controllers: [VitalSignController],
  providers: [VitalSignService],
  exports:[VitalSignService]
})
export class VitalSignModule {}
