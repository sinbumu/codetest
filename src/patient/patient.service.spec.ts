import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { PatientService } from './patient.service';
import { ConfigModule } from '@nestjs/config';

jest.setTimeout(60000)
describe('PatientService', () => {
  let service: PatientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({      
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      MongooseConnectorModule,//몽고디비 커넥터 (전역)
      MongooseAllFeatureModule
    ],
      providers: [PatientService],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
