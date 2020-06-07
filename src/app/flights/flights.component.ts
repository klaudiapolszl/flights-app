/* @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
}) */
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import {HttpParams} from "@angular/common/http";
import {Flights} from "../models/flight.model";
import 'rxjs/Rx';
import * as _ from 'lodash';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})

export class FlightsComponent implements OnInit {
    title = 'flights-app';
    flights$: Observable<Flights[]>;

    constructor(private http:HttpClient) {
    }

    ngOnInit() {
      const params = new HttpParams({
          fromString: 'orderBy="$key"&limitToFirst=1'
      });

      this.flights$ = this.http
          .request(
          "GET",
          "https://flights-app-f340c.firebaseio.com/flights.json",
          {
              responseType:"json",
              params
          })
          .do(console.log)
          .map(data => _.values(data));
    }
}
