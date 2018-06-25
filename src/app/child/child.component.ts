import { Component, OnInit ,ViewChild ,ElementRef, Input, DoCheck} from '@angular/core';
import {Movie} from '../movie';
import { MovieserviceService } from './movieservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

 
  constructor(private movieService:MovieserviceService){

  }

  private movies:Movie[]=[];
  private years:any[]=[];
  public movieSearch:string;


  selectedIndex:number;
  


  ngOnInit(): void {
   //this.movies=this.movieService.getMovies();
   this.movieService.getMoviesFromHttp().subscribe(resp=>{
     this.movies=resp;
   },(error=>{
     console.log(error);
   }))
  }


  removeItem(index){
    this.movieService.removeMovie(index);
  }

  
  updateRow(index:number,movie:Movie){
    this.selectedIndex=index;
   }

  


}
