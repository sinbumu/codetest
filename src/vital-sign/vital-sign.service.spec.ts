import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { VitalSignService } from './vital-sign.service';
import { ConfigModule } from '@nestjs/config';
import { forwardRef } from '@nestjs/common';
import { AlertCriteriaModule } from '../alert-criteria/alert-criteria.module';
import { AlertModule } from '../alert/alert.module';

jest.setTimeout(60000)
describe('VitalSignService', () => {
  let service: VitalSignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseConnectorModule,//몽고디비 커넥터 (전역)
        MongooseAllFeatureModule,
        forwardRef(() => AlertCriteriaModule),
        forwardRef(() => AlertModule),
      ],
      providers: [VitalSignService],
    }).compile();

    service = module.get<VitalSignService>(VitalSignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
