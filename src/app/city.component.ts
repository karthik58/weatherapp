
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { Http, Response } from "@angular/http";

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Component({
    selector: 'city',
    templateUrl: './city.component.html',
    styleUrls: ['./city.component.css']
})
export class CityComponent {

    private apiCityUrl;
    dataCity: any = {};
    newArr = []


    constructor(
        private http: Http,
        private location: Location,
        private route: ActivatedRoute
    ) {
        console.log('Sad ce city data ...');
        this.route.params.subscribe(params => this.getCityForecast(params['id']));
        this.getCityTest();
        this.getCityData();
        this.newArr
    }

    getCityForecast(cityId) {
        console.log('cityid', cityId);
        this.apiCityUrl = 'https://api.openweathermap.org/data/2.5/forecast?id=' + cityId + '&units=metric&appid=110ff02ed24ccd819801248373c3b208';
    }

    getCityData() {
        return this.http.get(this.apiCityUrl)
            .map((res: Response) => res.json())
    }

    getCityTest() {
        this.getCityData().subscribe(dataCity => {
            console.log('datacity', dataCity);
            this.dataCity = dataCity;

            for (let i = 0; i < this.dataCity.list.length; i = i + 8) {
                this.newArr.push(this.dataCity.list[i]);
            }
            console.log('arr', this.newArr)
        })
    }

    // Goind back to the previous page, goBack() called on click in the city component template
    goBack(): void {
        this.location.back();
    }

}


