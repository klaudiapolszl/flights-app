import { Component } from '@angular/core';
import { FlightsService } from './../core/services/flights.service';
import { Observable } from "rxjs/Observable";
import { Flights } from "../models/flight.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})

export class FlightsComponent {
  public flights$: Observable<Flights[]>;

  constructor(
    private flightsService: FlightsService,
    private router: Router
  ) {
    this.flights$ = this.flightsService.getFlights();
  }

  delete(key: string){
    let _this = this;
    this.flightsService.deleteFlight(key).then(()=>{
      setTimeout(function(){
        _this.flights$ = _this.flightsService.getFlights();
      },
      1000);
    });
  }
  goToEdit(key){
    this.router.navigateByUrl('/edit-flight/'+key);
  }

}
