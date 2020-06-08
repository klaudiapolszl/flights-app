import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../../core/services/flights.service';
import { Flight } from "../../models/flight.model";

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent{
    registerForm: FormGroup;
    private flight: Flight;

    constructor(
      private formBuilder: FormBuilder,
      private flightsService: FlightsService
    ) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            origin: [''],
            destination: [''],
            departureTime: [''],
            returnTime: [''],
            code: [''],
            additionalInformation: [''],
            crew: ['']
        });
    }


    onSubmit() {
      this.flight = this.registerForm.value;
      this.saveFlight();
      console.log(this.registerForm.value.origin);
    }

    saveFlight(){
      this.flightsService.addFlight(this.flight);
    }
    onReset() {

    }
}
