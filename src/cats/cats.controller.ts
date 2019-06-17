import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Cat } from './cat.entity';

@Controller('cats')
export class CatsController {

  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catsService.findAll();
  }

  @Get('/add')
  async addCat(): Promise<string> {
    const result = await this.catsService.addCat();
    return result.raw;
  }
}
