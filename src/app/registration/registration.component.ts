import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(fName){
  console.log(fName.value);

  }
  submit(form:any){
  console.log(form.value.firstName);
  }
}
