import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { AlertService } from './alert.service';
import { ConfigModule } from '@nestjs/config';
import { AlertCriteriaModule } from '../alert-criteria/alert-criteria.module';

jest.setTimeout(60000)
describe('AlertService', () => {
  let service: AlertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseConnectorModule,//몽고디비 커넥터 (전역)
        MongooseAllFeatureModule,
        AlertCriteriaModule
      ],
      providers: [AlertService],
    }).compile();

    service = module.get<AlertService>(AlertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
