import { Test, TestingModule } from '@nestjs/testing';
import { closeInMongodConnection, rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { VitalSignController } from './vital-sign.controller';
import { VitalSignService } from './vital-sign.service';

jest.setTimeout(60000)
describe('VitalSignController', () => {
  let controller: VitalSignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseAllFeatureModule
      ],
      controllers: [VitalSignController],
      providers: [VitalSignService],
    }).compile();

    controller = module.get<VitalSignController>(VitalSignController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  afterAll(async () => {
    await closeInMongodConnection();
  });
});
