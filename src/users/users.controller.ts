import { Controller, createParamDecorator, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

export const User = createParamDecorator((data: string, req) => {
  return data ? req.user && req.user[data] : req.user;
});

@Controller('users')
@UseGuards(AuthGuard())
export class UsersController {

  @Get()
  findAll() {
    return [];
  }

  @Get('/name')
  findOne(@User('name') name: string) {
    return name;
  }
}
