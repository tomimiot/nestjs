import { Injectable } from '@nestjs/common';
import { CrudService } from '../base/crud.service';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService extends CrudService<UserEntity> {

  findOneByToken(token: string): Promise<any> {
    if (token === 'dupa') {
      return Promise.resolve({ name: 'user' });
    }
    return Promise.resolve();
  }
}
