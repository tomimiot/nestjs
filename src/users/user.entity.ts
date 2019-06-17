import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ExtendedEntity } from '../base/extended.entity';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

@Entity()
export class UserEntity extends ExtendedEntity {

  @ApiModelProperty()
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiModelProperty()
  @IsString()
  @Column()
  public name: string;

}
