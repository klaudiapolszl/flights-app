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
  private API_URL = 'https://flights-app-f340c.firebaseio.com';

  constructor(private http:HttpClient) {
  }

  getFlights(): Observable<Flights[]> {
    return this.http
        .request(
        "GET",
        this.API_URL+'/flights.json',
        {
            responseType:"json",
        })
        .do(console.log)
        .map(data => _.values(data));
    }

    addFlight(flight) {
      return this.http.post(this.API_URL+"/flights.json",
      {
          "origin": flight.orgin,
          "destination": flight.destination,
          "departureTime": flight.departureTime,
          "returnTime": flight.returnTime,
          "code": flight.code,
          "additionalInformation": flight.additionalInformation,
          "crew": flight.crew
      })
      .subscribe(
          (val) => {
              console.log("POST call successful value returned in body",
                          val);
          },
          response => {
              console.log("POST call in error", response);
          },
          () => {
              console.log("The POST observable is now completed.");
          });
      }
  }
