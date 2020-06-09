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

  crews = [
    { label: 'Crew1', value: 'Kowalski, Szlachta, Polan'},
    { label: 'Crew2', value: 'Górnikowski, Kłosowska, Jawor'},
    { label: 'Crew3', value: 'Szumska, Miedziński, Kowal'},
    { label: 'Crew4', value: 'Hepner, Janik, Zdrada'},
    { label: 'Crew5', value: 'Kotarski, Jakut, Nowogrodzki'}
  ]

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
  }

  saveFlight(){
    this.flightsService.addFlight(this.flight);
  }
}
