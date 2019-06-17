import { BaseEntity, Column, CreateDateColumn, Generated, UpdateDateColumn, VersionColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

export class ExtendedEntity extends BaseEntity {

  @ApiModelProperty()
  @Column()
  @Generated('uuid')
  public uuid: string;

  @ApiModelProperty()
  @VersionColumn({
    type: 'int',
    nullable: false,
  })
  public version: number;

  @ApiModelProperty()
  @CreateDateColumn({
    type: 'timestamp',
  })
  public createdAt: Date;

  @ApiModelProperty()
  @UpdateDateColumn({
    type: 'timestamp',
  })
  public updatedAt: Date;

}
