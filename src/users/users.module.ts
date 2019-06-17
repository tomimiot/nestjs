import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'bearer' }), TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {
}
