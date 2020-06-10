import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Flights } from "../../models/flight.model";
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
    let x = this.http
      .request(
      "GET",
      this.API_URL+'/flights.json',
      {
          responseType:"json",
      })
      .do(flights => {
        let keys = Object.keys(flights);
        let flightsWithKey = [];
        keys.map((key,index) => {
          flightsWithKey[index] = flights[key];
          flightsWithKey[index].key = key;
        });
        return flightsWithKey;
      })
      .do(console.log)
      .map(data => _.values(data));
      return x;
    }

  addFlight(flight) {
    return this.http.post(this.API_URL+"/flights.json",
    {
      "origin": flight.origin,
      "destination": flight.destination,
      "departureTime": flight.departureTime,
      "returnTime": flight.returnTime,
      "code": flight.code,
      "additionalInformation": flight.additionalInformation,
      "crew": flight.crew
    })
    .subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }
  async deleteFlight(key: string) {
    this.http.delete(this.API_URL+"/flights/"+key+".json")
    .subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body",
                      val);
      },
      response => {
          console.log("DELETE call in error", response);
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });
  }

  editFlight(key: string,flight) {
    const headers = new HttpHeaders()
    .set("Content-Type", "application/json");

    this.http.put(this.API_URL+"/flights/"+key+".json",
    {
      "origin": flight.origin,
      "destination": flight.destination,
      "departureTime": flight.departureTime,
      "returnTime": flight.returnTime,
      "code": flight.code,
      "additionalInformation": flight.additionalInformation,
      "crew": flight.crew
    },
    {headers})
    .subscribe(
      (val) => {
        console.log("POST call successful value returned in body", val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }
}
