import { Component, OnInit, Input, DoCheck,ChangeDetectionStrategy } from '@angular/core';
import {MovieserviceService} from '../movieservice.service';
import { Movie } from '../../movie';

@Component({
  selector: 'app-added-form',
  templateUrl: './added-form.component.html',
  styleUrls: ['./added-form.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddedFormComponent implements OnInit,DoCheck {

  constructor(private movieService:MovieserviceService) { }

  movieName:string;
  movieYear:string;
  years:number[]=[];
  updateForm:boolean=false;
  updateIndex:number;
  

  @Input("retrieveIndex") retrieveIndex;

  ngDoCheck(){
    if(this.retrieveIndex!==undefined ){
      let movie=this.movieService.getMovie(this.retrieveIndex);
      this.movieName=movie.name;
      this.movieYear=movie.year;
      this.updateForm=true;
      this.updateIndex=this.retrieveIndex;
      this.retrieveIndex=undefined;
    }
    
  }

  ngOnInit() {
    this.years=this.movieService.getMovieYears();
    this.movieYear="-1";
  }

  saveMovie(){
    let movie=new Movie(this.movieName,this.movieYear);
    this.movieService.saveMovie(movie);
    this.movieName="";
    this.movieYear="";
  }

  updateMovie(movieName:string,movieYear:string){
    this.movieService.updateMovie(this.updateIndex,new Movie(movieName,movieYear));
    this.updateForm=false;
    this.movieName="";
    this.movieYear="";

  }



}
