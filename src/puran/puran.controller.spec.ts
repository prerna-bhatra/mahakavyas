import { Test, TestingModule } from '@nestjs/testing';
import { PuranController } from './puran.controller';

describe('PuranController', () => {
  let controller: PuranController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PuranController],
    }).compile();

    controller = module.get<PuranController>(PuranController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
