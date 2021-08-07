import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { closeInMongodConnection, rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { VitalSignController } from './vital-sign.controller';
import { VitalSignService } from './vital-sign.service';
import { ConfigModule } from '@nestjs/config';

jest.setTimeout(60000)
describe('VitalSignController', () => {
  let controller: VitalSignController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseConnectorModule,//몽고디비 커넥터 (전역)
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
