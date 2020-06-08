import { Component } from '@angular/core';
import { FlightsService } from './../core/services/flights.service';
import { Observable } from "rxjs/Observable";
import { Flights } from "../models/flight.model";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})

export class FlightsComponent {
    title = 'flights-app';

    constructor(
      private flightsService: FlightsService
    ) { }
    flights$: Observable<Flights[]> = this.flightsService.getFlights();
}
