import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from "./flights/flights.component";
import { FlightCardComponent } from "./flights/flight-card/flight-card.component"

const routes: Routes = [
  {path: '', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
