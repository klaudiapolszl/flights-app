import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightFormComponent } from './flight-form/flight-form.component';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [FlightsComponent, FlightCardComponent, NewFlightComponent, FlightFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [FlightsComponent]
})
export class FlightsModule { }
