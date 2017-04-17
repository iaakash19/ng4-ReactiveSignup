import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../models/customer.model';


@Component({
  selector: 'app-signup-reactive',
  templateUrl: './signup-reactive.component.html',
  styleUrls: ['./signup-reactive.component.scss']
})
export class SignupReactiveComponent implements OnInit {
  
  customer: Customer = new Customer();
  customerForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
        firstName: ['', [
          Validators.required,
          Validators.minLength(3)
        ]],
        lastName: ['', [
          Validators.required,
          Validators.maxLength(15)
        ]],
        email: '',
        phone: null,
        notification: 'email',
        sendCatalog: true
    })
  }

  onFormSubmit() {
    console.log(this.customerForm.value);
  }
  
  // Setting/Removing Validations on the Fly
  setNotification(notifyVia: string) {
    const phoneCtrl = this.customerForm.get('phone');
    if(notifyVia === 'text') {
      phoneCtrl.setValidators(Validators.required);
    }else{
      phoneCtrl.clearValidators();
    }
    phoneCtrl.updateValueAndValidity();
  }

  loadTestData() : void {
    this.customerForm.setValue({
        firstName: 'Adam',
        lastName: 'Gilchrist',
        email: 'aakash.ohri19@gmail.com',
        sendCatalog: false
    })
  }

}
