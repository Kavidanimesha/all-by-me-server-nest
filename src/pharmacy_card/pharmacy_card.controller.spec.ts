import { Test, TestingModule } from '@nestjs/testing';
import { Pharmacy_cardController } from './pharmacy_card.controller';
import { Pharmacy_cardService } from './pharmacy_card.service';

describe('PharmacyCardController', () => {
  let controller: Pharmacy_cardController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Pharmacy_cardController],
      providers: [Pharmacy_cardService],
    }).compile();

    controller = module.get<Pharmacy_cardController>(Pharmacy_cardController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
