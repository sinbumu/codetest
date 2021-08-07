import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { AlertController } from './alert.controller';
import { AlertService } from './alert.service';
import { AlertCriteriaModule } from '../alert-criteria/alert-criteria.module';
import { ConfigModule } from '@nestjs/config';

jest.setTimeout(60000)
describe('AlertController', () => {
  let controller: AlertController;

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
      controllers: [AlertController],
      providers: [AlertService],
    }).compile();

    controller = module.get<AlertController>(AlertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
