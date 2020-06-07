import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent],
  imports: [
    CommonModule
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
