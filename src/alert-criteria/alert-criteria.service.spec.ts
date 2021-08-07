import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { AlertCriteriaService } from './alert-criteria.service';

jest.setTimeout(60000)
describe('AlertCriteriaService', () => {
  let service: AlertCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
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
