import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { VitalSignService } from './vital-sign.service';

jest.setTimeout(60000)
describe('VitalSignService', () => {
  let service: VitalSignService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseAllFeatureModule
      ],
      providers: [VitalSignService],
    }).compile();

    service = module.get<VitalSignService>(VitalSignService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
