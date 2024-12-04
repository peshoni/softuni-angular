import { Pipe, type PipeTransform } from '@angular/core';
import moment from 'moment';

@Pipe({
  name: 'appElapsedTime',
  standalone: true,
})
export class ElapsedTimePipe implements PipeTransform {
  transform(date: string): unknown {
    return moment(date).fromNow();
  }
}
