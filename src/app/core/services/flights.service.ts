import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Flights, Flight } from "../../models/flight.model";
import 'rxjs/Rx';
import * as _ from 'lodash';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = 'https://flights-app-f340c.firebaseio.com';

  constructor(
    private http:HttpClient,
    private snackBar: MatSnackBar) {}

  getFlights(): Observable<Flights[]> {
    let getData = this.http
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
      .map(data => _.values(data));
    return getData;
  }

  getFlight(key: string): Observable<Flight> {
    return this.http
      .request('GET',this.API_URL+"/flights/"+key+".json",
      {
          responseType:"json",
      })
      .do(console.log);
  }

  addFlight(flight: Flight) {
    return this.http.post(this.API_URL+"/flights.json", flight)
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

  async editFlight(key: string, flight: Flight) {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const status = await this.http.put(this.API_URL+"/flights/"+key+".json", flight,{headers}).subscribe(
      (val) => {
          console.log("DELETE call successful value returned in body",
                      val);
          this.openSnackBar('The edition was successful');
      },
      response => {
          console.log("DELETE call in error", response);
          this.openSnackBar('The edition was error');
      },
      () => {
          console.log("The DELETE observable is now completed.");
      });
    return status;    
  }

  openSnackBar(comment:string) {
    this.snackBar.open(comment, 'X', {
      duration: 2000
    });
  }
}
