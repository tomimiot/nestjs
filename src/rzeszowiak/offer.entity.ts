import { ExtendedEntity } from '../base/extended.entity';

export class OfferEntity extends ExtendedEntity {
  public title: string;
  public link: string;
  public price: number;
  public pricePerAr: number;
  public description: string;
}
