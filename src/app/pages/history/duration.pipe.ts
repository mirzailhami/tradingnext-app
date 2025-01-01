import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const duration = moment.duration(value, 'minutes');
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();

    let formatted = '';
    if (days > 0) {
      formatted += `${days}d `;
    }
    if (hours > 0) {
      formatted += `${hours}h `;
    }
    formatted += `${minutes}m`;

    return formatted;
  }
}