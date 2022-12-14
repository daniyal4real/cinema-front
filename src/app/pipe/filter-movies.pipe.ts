import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from "../model/movie";

@Pipe({
  name: 'filterMovies'
})
export class FilterMoviesPipe implements PipeTransform {

  transform(movies: Movie[], search: string): Movie[] {
    return movies.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
  }

}
