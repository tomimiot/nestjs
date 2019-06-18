import { HttpModule, Module } from '@nestjs/common';
import { RzeszowiakService } from './rzeszowiak.service';
import { RzeszowiakController } from './rzeszowiak.controller';

@Module({
  imports: [HttpModule],
  providers: [RzeszowiakService],
  controllers: [RzeszowiakController],
})
export class RzeszowiakModule {
}
