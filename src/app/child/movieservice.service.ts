import { Injectable } from '@angular/core';
import { Movie } from '../movie';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {

  constructor(private http:Http) { }

  private movies: Array<Movie>=[];
  private years:Array<number>=[];
  getMovies() {
    this.movies.push(new Movie("The Green Mile", "2001"));
    this.movies.push(new Movie("The Girl Next Door", "2004"));
    this.movies.push(new Movie("Titanic", "2001"));
    return this.movies;
  }

  getMoviesFromHttp():Observable<Movie[]>{
    return this.http.get("http://localhost/thehappyday/movie.php").pipe(map(resp=>{
      return JSON.parse(resp["_body"]);
    }))
  }

  

  getMovieYears(){
   for(let i=2000; i<=new Date().getFullYear(); i++){
     this.years.push(i);
   }
   return this.years;
  }

  saveMovie(movie:Movie){
   this.movies.push(movie);
  }

  removeMovie(index:number){
   this.movies.splice(index,1);
  }

  updateMovie(index:number,movie:Movie){
    this.movies[index].name=movie.name;
    this.movies[index].year=movie.year;
  }

  getMovie(index:number):Movie{
   return this.movies[index];
  }
}
