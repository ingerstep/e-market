import { Test, TestingModule } from '@nestjs/testing';
import { PhonesSeedService } from './phones-seed.service';

describe('PhonesSeedService', () => {
  let service: PhonesSeedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhonesSeedService],
    }).compile();

    service = module.get<PhonesSeedService>(PhonesSeedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
