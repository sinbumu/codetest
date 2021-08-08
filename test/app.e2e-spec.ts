import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { rootMongooseTestModule } from './../src/mongodb-test-inmemory/MongooseTestModule';
import { response } from 'express';

jest.setTimeout(60000)
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  //api 테스트 1 - 경고기준들 생성 > 환자 생성 > 환자 바이탈 생성(환자 알림도 이때 생성) > 알림 발생한 환자들 조회 (시간 from to 값으로)
  it('api 테스트 1', () => {
    request(app.getHttpServer())
      .get('/alert-criteria')
      .expect(200)
  })
});
