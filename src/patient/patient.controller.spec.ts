import { Test, TestingModule } from '@nestjs/testing';
import { MongooseConnectorModule } from '../mongoose-connector/mongoose-connector.module';
import { rootMongooseTestModule } from '../mongodb-test-inmemory/MongooseTestModule';
import { MongooseAllFeatureModule } from '../mongoose-all-feature/mongoose-all-feature.module';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';
import { ConfigModule } from '@nestjs/config';
import * as request from 'supertest';
import { async } from 'rxjs';

jest.setTimeout(60000)
describe('PatientController', () => {
  let controller: PatientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        MongooseConnectorModule,//몽고디비 커넥터 (전역)
        MongooseAllFeatureModule
      ],
      controllers: [PatientController],
      providers: [PatientService],
    }).compile();

    controller = module.get<PatientController>(PatientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('CRUD', async () => {
    //그냥 싹 호출 + 뭔가 응답값을 넘겨주는지만 테스트
    let user = await controller.create({name:"cat"});
    expect(user).toBeTruthy();
    expect(await controller.findAll()).toBeTruthy();
    expect(await controller.findOne(user._id)).toBeTruthy();
    expect(await controller.update(user._id, {name:"cat2"})).toBeTruthy();
    expect(await controller.remove(user._id)).toBeTruthy();
  });
});
