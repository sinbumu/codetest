import { Test, TestingModule } from '@nestjs/testing';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { AlertCriteriaController } from './alert-criteria.controller';
import { AlertCriteriaService } from './alert-criteria.service';

jest.setTimeout(60000)
describe('AlertCriteriaController', () => {
  let controller: AlertCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseAllFeatureModule
      ],
      controllers: [AlertCriteriaController],
      providers: [AlertCriteriaService],
    }).compile();

    controller = module.get<AlertCriteriaController>(AlertCriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
