import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLine'
})
export class ChangeLinePipe implements PipeTransform {
  replaceLineForSpace;
  transform(VarJson: any): any {
    this.replaceLineForSpace = VarJson.replace(/-/g,' ');
  return this.replaceLineForSpace;
  }

}
