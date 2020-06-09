import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from "./flights/flights.component";
import { FlightCardComponent } from "./flights/flight-card/flight-card.component";
import { NewFlightComponent } from "./flights/new-flight/new-flight.component";
import {DashboardComponent} from "./flights/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'flights', component: FlightsComponent},
  {path: 'add-new-flights', component: NewFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
