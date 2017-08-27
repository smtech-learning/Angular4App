import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  consolelog(firstName){
    console.log(firstName);
  }

  submit(f){
    console.log(f);
  }
} 
