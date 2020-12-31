
import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/map';

@Component({
  selector: 'cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent {
  title = 'City Weather';
  today: number = Date.now();
  private apiUrl = 'https://api.openweathermap.org/data/2.5/group?id=3169070,3054643,2964574,2867714,2800866&units=metric&appid=110ff02ed24ccd819801248373c3b208';
  data: any = {};

  constructor(private http: Http) {
    this.getTest();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getTest() {
    this.getData().subscribe(data => {
      this.data = data;
    })
  }
}

