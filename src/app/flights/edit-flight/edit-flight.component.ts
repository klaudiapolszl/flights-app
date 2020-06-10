import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightsService } from '../../core/services/flights.service';
import { Flight } from "../../models/flight.model";
import { Router } from '@angular/router';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent{
  editForm: FormGroup;
  public flight$: Observable<Flight>;
  private flightForm: Flight;
  private key = this.router.url.substring(13, this.router.url.length);

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
  ) { 
    this.flight$ = this.flightsService.getFlight(this.key);
    this.flightsService.getFlight(this.key).subscribe(flight => {
      this.editForm = this.formBuilder.group({
        origin: [flight.origin, { validators: [Validators.required] }],
        destination: [flight.destination, { validators: [Validators.required] }],
        departureTime: [flight.departureTime, { validators: [Validators.required] }],
        returnTime: [flight.returnTime, { validators: [Validators.required] }],
        code: [flight.code, { validators: [Validators.required] }],
        additionalInformation: [flight.additionalInformation, { validators: [Validators.required] }],
        crew: [flight.crew, { validators: [Validators.required] }]
      });
    })
  }
  
  onSubmit() {
    this.flightForm = this.editForm.value;
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
    this.flightsService.editFlight(this.key, this.flightForm);
  }

  goToMainPage(){
    this.router.navigateByUrl('');
  }
}
