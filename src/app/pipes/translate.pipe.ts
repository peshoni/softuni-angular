import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false
})
export class TranslatePipe implements PipeTransform {
  currentLang = 'EN'
  translation = []


  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
