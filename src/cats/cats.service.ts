import { Inject, Injectable } from '@nestjs/common';
import { Cat } from './cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class CatsService {

  constructor(@InjectRepository(Cat) private readonly catRepository: Repository<Cat>) {
  }

  async findAll(): Promise<Cat[]> {
    return this.catRepository.find();
  }

  async addCat(): Promise<InsertResult> {
    return await this.catRepository.insert({name: 'Test', age: 1, breed: 'dupa'});
  }
}
