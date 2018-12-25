import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'math'
})
export class MathPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newValue: any;
    if (args === 'trunc') {
      newValue = Math.trunc(value);
    } else if (args === 'min') {
      newValue = Math.min(...value);
    } else if (args === 'max') {
      newValue = Math.max(...value);
    } else {
      newValue = null;
    }
    return newValue;
  }

}
