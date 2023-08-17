import { Test, TestingModule } from '@nestjs/testing';
import { PuranService } from './puran.service';

describe('PuranService', () => {
  let service: PuranService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PuranService],
    }).compile();

    service = module.get<PuranService>(PuranService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
