import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.model';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  
  customer: Customer = new Customer();

  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(FormValue) {
    console.log('FormValue', FormValue);
  }

}
