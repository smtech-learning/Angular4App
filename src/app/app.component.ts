import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  courses:string[]= ['telugu', 'Spanis', 'English'];
  isThisTrue:boolean=false;

  log(f){
    console.log(f)
  }

  // tslint:disable-next-line:one-line
  submit(f){
    console.log(f.value.firstName);
  }
}

