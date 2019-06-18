import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HTMLElement, parse } from 'node-html-parser';
import { OfferEntity } from './offer.entity';
import moment = require('moment');
// tslint:disable-next-line:no-var-requires
const iso88592 = require('iso-8859-2');

// import iso88592 from 'iso-8859-2';

@Injectable()
export class RzeszowiakService {

  constructor(private readonly httpService: HttpService) {

  }

  public getParcels(): Observable<any> {
    return this.httpService.get('http://www.rzeszowiak.pl/Nieruchomosci-Sprzedam-3070011995?r=dzialki',
      { responseType: 'arraybuffer', maxRedirects: 20 })
      .pipe(map(res => {
        const html = iso88592.decode(res.data.toString('binary'));
        const root: HTMLElement = parse(html) as (HTMLElement & { valid: boolean; });
        // const promoBoxes = root.querySelectorAll('.promobox');
        const normalBoxes = root.querySelectorAll('.normalbox');

        const offers: Array<Partial<OfferEntity>> = normalBoxes.map(element => {
          const titleNode = element.querySelector('.normalbox-title-left');
          const priceNode = element.querySelector('.normalbox-title-left2');
          const descriptionNode = element.querySelector('.normalbox-body-right');
          const addDateNode = element.querySelector('.dodane');
          const addDateText = addDateNode.childNodes[1].childNodes[0].text;
          let createdAt = new Date(addDateText);
          if (addDateText.includes('dziś,')) {
            const hoursString = addDateText.replace('dziś,', '');
            createdAt = moment(hoursString, 'HH:mm').toDate();
          }
          return {
            title: titleNode.text.trim(),
            link: (titleNode.childNodes[1] as HTMLElement).attributes.href,
            price: parseInt(priceNode.childNodes[1].text, 10),
            pricePerAr: parseInt(priceNode.childNodes[2].text.replace(/[\s\[\]\\]/g, ''), 10),
            createdAt,
            description: descriptionNode.childNodes[0].text,
          };
        });

        return offers;
      }));
  }
}
