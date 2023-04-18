import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyCardService } from './pharmacy_card.service';

describe('PharmacyCardService', () => {
  let service: PharmacyCardService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PharmacyCardService],
    }).compile();

    service = module.get<PharmacyCardService>(PharmacyCardService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
