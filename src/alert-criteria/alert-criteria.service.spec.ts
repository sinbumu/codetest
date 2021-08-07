import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { AlertCriteriaService } from './alert-criteria.service';
import { ConfigModule } from '@nestjs/config';

jest.setTimeout(60000)
describe('AlertCriteriaService', () => {
  let service: AlertCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseConnectorModule,//몽고디비 커넥터 (전역)
        MongooseAllFeatureModule
      ],
      providers: [AlertCriteriaService],
    }).compile();

    service = module.get<AlertCriteriaService>(AlertCriteriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
