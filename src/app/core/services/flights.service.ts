import { Injectable } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Flights } from "../../models/flight.model";
import { FlightCardComponent } from "../../flights/flight-card/flight-card.component"
import 'rxjs/Rx';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = 'https://flights-app-f340c.firebaseio.com/flights.json';

  constructor(private http:HttpClient) {
  }

  getFlights(): Observable<Flights[]> {
    return this.http
        .request(
        "GET",
        this.API_URL,
        {
            responseType:"json",
        })
        .do(console.log)
        .map(data => _.values(data));
    }
  }
