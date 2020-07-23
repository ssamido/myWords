import { Pipe, PipeTransform } from '@angular/core';
import sortBy from 'lodash/sortBy';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  transform(items: any, args?: any): any {
    console.log('ran');
    return sortBy(items, item => item[args]);
  }

}