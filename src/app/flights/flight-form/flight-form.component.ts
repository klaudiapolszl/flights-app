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
  addForm: FormGroup;
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
    this.addForm = this.formBuilder.group({
      origin: ['', { validators: [Validators.required] }],
      destination: ['', { validators: [Validators.required] }],
      departureTime: ['', { validators: [Validators.required] }],
      returnTime: ['', { validators: [Validators.required] }],
      code: ['', { validators: [Validators.required] }],
      additionalInformation: ['', { validators: [Validators.required] }],
      crew: ['', { validators: [Validators.required] }]
    });
  }

  onSubmit() {
    this.flight = this.addForm.value;
    (this.validationForm()) ? this.saveFlight() : '';
  }

  saveFlight(){
      this.flightsService.addFlight(this.flight);
      setTimeout(function(){
        window.location.reload();
      },
      1000);
    }

  validationForm(){
    var object = this.addForm.value;
    for (var prop in object) {
      if(!object[prop]){
        return false;
      }
  	}
    return true;
  }
}
