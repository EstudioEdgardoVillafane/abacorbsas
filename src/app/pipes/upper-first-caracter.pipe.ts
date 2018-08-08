import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperFirstCaracter'
})
export class UpperCaracter implements PipeTransform {

  transform(value: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
