
  import {Injectable, Pipe , PipeTransform} from '@angular/core';
   

@Pipe({
  name: 'myfilter',
})
export class MyFilterPipe implements PipeTransform {

  transform(words: any, args?: any): any {
     
    return words.filter(items => items.English.toLowerCase().includes(args.toLowerCase()) );
    
  }

 

}