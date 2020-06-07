import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  private pflight = {
   additionalInformation: '',
   code: '',
   crew: [],
   departureTime: '',
   destination: '',
   origin: '',
   returnTime: '',
   key: ''
 };

 @Input()
 set flight(flight: Flight) {
   this.pflight = flight;
 }
 get showAdditionalInformation(): string {
   return this.pflight.additionalInformation;
 }
 get showCode(): string {
   return this.pflight.code;
 }
 get showCrew(): string[] {
   let flightCrew = new Array();
   for (var i = 0; i < this.pflight.crew?.length; i++) {
      flightCrew.push(this.pflight.crew[i].job + " - " + this.pflight.crew[i].name);
    }
    return flightCrew;
 }
 get showDepartureTime(): string {
   return this.pflight.departureTime;
 }
 get showDestination(): string {
   return this.pflight.destination;
 }
 get showOrigin(): string {
   return this.pflight.origin;
 }
 get showReturnTime(): string {
   return this.pflight.returnTime;
 }
}
