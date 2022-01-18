import { Pipe, PipeTransform } from '@angular/core';
import { pipe } from 'rxjs';
@Pipe({
  name: 'cardFormat'
})
export class CardFormatPipe implements PipeTransform {
  transform(value: any) {
    if (value === undefined) {
      return value;
    }
    const formatVal = value.replace(/\s+/g, '').replace(/([\w*]{4})/g,'$1 ').trim();
    return formatVal;
  }
}
