import { Component, Input } from '@angular/core';
import { Flight } from '../../models/flight.model';

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.scss']
})
export class FlightCardComponent {
  private pflight: Flight;

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
 get showCrew(): string {
  return this.pflight.crew;
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
