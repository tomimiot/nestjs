import { Controller, Get } from '@nestjs/common';
import { RzeszowiakService } from './rzeszowiak.service';

@Controller('rzeszowiak')
export class RzeszowiakController {

  constructor(private readonly rzeszowiakService: RzeszowiakService) {
  }

  @Get()
  async findAll(): Promise<any> {
    return await this.rzeszowiakService.getParcels();
  }
}
