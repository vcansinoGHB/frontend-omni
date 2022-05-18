import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
 
  transform(text: string, index: number = 0) {
    if (text !== null) {
      let arr = text.split("|");
      return arr[index];
    } else {
      return text;
    }
  }

}
