import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {

  transform(value: string): any {
    return value.toLowerCase() === "true" ? 'Yes' : 'No';
    }

}
