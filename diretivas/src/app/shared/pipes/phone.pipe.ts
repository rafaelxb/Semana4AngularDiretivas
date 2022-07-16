import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    const valueSpd = value.split('');
    const phone = `(${valueSpd[0]}${valueSpd[1]}) ${valueSpd[2]}${valueSpd[3]}${valueSpd[4]}${valueSpd[5]}${valueSpd[6]}-${valueSpd[7]}${valueSpd[8]}${valueSpd[9]}${valueSpd[10]}`;
    return phone;
  }

}
