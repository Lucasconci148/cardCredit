import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spaceNumber'
})
export class SpaceNumberPipe implements PipeTransform {

  transform(value: string): string {

    const cardNumberArray = Array.from(value);
    let count = 0;
    let card = '';

    cardNumberArray.forEach((leter) => {
      if (count === 4) {
        card = `${card} ${leter}`;
        count = 1;
      } else {
        card = `${card}${leter}`;
        count += 1;
      }
    });

    return card;
  }
}
