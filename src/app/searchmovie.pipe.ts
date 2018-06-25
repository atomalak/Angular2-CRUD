import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie';

@Pipe({
  name: 'searchmovie'
})
export class SearchmoviePipe implements PipeTransform {

  transform(value: Movie[], searchtext?: string) {
    if (searchtext == undefined || searchtext == "") {
      searchtext = null;
    }
    if (searchtext !== null) {
      return value.filter((m: Movie) => m.name.toLowerCase().indexOf(searchtext)!=-1);
    } else {
      return value;
    }
  }

}
