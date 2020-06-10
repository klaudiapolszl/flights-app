import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./flights/dashboard/dashboard.component";
import {EditFlightComponent} from "./flights/edit-flight/edit-flight.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'edit-flight/:key', component: EditFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
