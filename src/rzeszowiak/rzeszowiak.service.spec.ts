import { Test, TestingModule } from '@nestjs/testing';
import { RzeszowiakService } from './rzeszowiak.service';

describe('RzeszowiakService', () => {
  let service: RzeszowiakService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RzeszowiakService],
    }).compile();

    service = module.get<RzeszowiakService>(RzeszowiakService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
