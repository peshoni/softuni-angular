import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'idShrink',
  standalone: true,
  pure: false
})
export class IdShrinkPipe implements PipeTransform {

  transform(value: string): unknown {
    return value ? value.split('-')[0] : '';
  }

}
