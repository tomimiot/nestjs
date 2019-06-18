import { Test, TestingModule } from '@nestjs/testing';
import { RzeszowiakController } from './rzeszowiak.controller';

describe('Rzeszowiak Controller', () => {
  let controller: RzeszowiakController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RzeszowiakController],
    }).compile();

    controller = module.get<RzeszowiakController>(RzeszowiakController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
