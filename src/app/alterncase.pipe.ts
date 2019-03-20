import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alterncase'
})
export class AlterncasePipe implements PipeTransform {

  transform(value: string): string {
    let outChaine = '';
    for (let i=0; i<value.length; i++) {
      if (i % 2) {
        outChaine += value[i].toUpperCase();
      } else {
        outChaine += value[i].toLowerCase();
      }
    }
    return outChaine;
  }

}
