import { Test, TestingModule } from '@nestjs/testing';
import { AlertCriteriaService } from './alert-criteria.service';

describe('AlertCriteriaService', () => {
  let service: AlertCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlertCriteriaService],
    }).compile();

    service = module.get<AlertCriteriaService>(AlertCriteriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
