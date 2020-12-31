import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute }   from '@angular/router';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { CityComponent } from './city.component';
import { CitiesComponent } from './cities.component';

@NgModule({
  declarations: [
    AppComponent, CityComponent, CitiesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // Defined routes: cities is a list of cities, city is extended forecast for the given city
    RouterModule.forRoot([
       {
        // Going to the app root will redirect to cities component
        path: '',
        redirectTo: '/cities',
        pathMatch: 'full'
      },
      {
        path: 'city/:id',
        component: CityComponent
      },

      {
        path: 'cities',
        component: CitiesComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
