import { Test, TestingModule } from '@nestjs/testing';
import { AlertCriteriaController } from './alert-criteria.controller';
import { AlertCriteriaService } from './alert-criteria.service';

describe('AlertCriteriaController', () => {
  let controller: AlertCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlertCriteriaController],
      providers: [AlertCriteriaService],
    }).compile();

    controller = module.get<AlertCriteriaController>(AlertCriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
