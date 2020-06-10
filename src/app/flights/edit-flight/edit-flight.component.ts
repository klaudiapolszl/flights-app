import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../../core/services/flights.service';
import { Flight, Flights } from "../../models/flight.model";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent{
  editForm: FormGroup;
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
    private flightsService: FlightsService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
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
    this.flight = this.editForm.value;
    (this.validationForm()) ? this.edit() : '';
  }

  validationForm(){
    var object = this.editForm.value;
    for (var prop in object) {
      if(!object[prop]){
        return false;
      }
    }
    return true;
  }

  edit(){
    let url = this.router.url;
    let key = url.substring(13, url.length);
    console.log(key);
    this.flightsService.editFlight(key,this.flight);
  }

  goToMainPage(){
    this.router.navigateByUrl('');
  }

  openSnackBar() {
    this.snackBar.open('The edition was successful', 'X', {
      duration: 2000
    });
  }
}
