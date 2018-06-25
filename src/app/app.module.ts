import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SearchmoviePipe } from './searchmovie.pipe';
import { ChildComponent } from './child/child.component';
import {MovieserviceService} from './child/movieservice.service';
import { AddedFormComponent } from './child/added-form/added-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchmoviePipe,
    ChildComponent,
    AddedFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MovieserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
   
  //one way binding

 }
