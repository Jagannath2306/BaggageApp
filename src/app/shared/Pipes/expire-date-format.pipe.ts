import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expireDateFormat'
})
export class ExpireDateFormatPipe implements PipeTransform {
  transform(value: any) {
    if (value === undefined) {
      return value;
    }
    const formatVal = value.replace(/\s+/g, '/').replace(/([\w*]{2})/g, '$1 ').trim();
    return formatVal;
  }

}
