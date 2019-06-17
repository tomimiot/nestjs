import { ValidatorConstraintInterface } from 'class-validator';
import { UsersService } from './users.service';

export class IsUserAlreadyExist implements ValidatorConstraintInterface {
  constructor(protected readonly userService: UsersService) {

  }

  public async validate(text: string): Promise<boolean> {
    const user = await this.userService.findOne({ email: text});
    return !user;
  }
}
