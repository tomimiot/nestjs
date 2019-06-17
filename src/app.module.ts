import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CatsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'ec2-54-247-178-166.eu-west-1.compute.amazonaws.com',
    port: 5432,
    username: 'ngwfsweismovgm',
    password: 'd3429dcc9d5485effeb9a5da1d4f5faff856b0601f002dad7e6a93df810e38e5',
    database: 'd6eqn957b71ndi',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
    ssl: true,
  }), AuthModule, UsersModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
