import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FlightsComponent} from "./flights/flights.component";
import {FlightCardComponent} from "./flights/flight-card/flight-card.component"

const routes: Routes = [
  /*{path: '', redirectTo: '/flight-cards', pathMatch: 'full'},
  {path: 'flight-cards', component: FlightCardComponent},*/
  {path: '', component: FlightsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
