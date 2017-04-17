import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SignupReactiveComponent } from './signup-reactive/signup-reactive.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [SignupComponent, SignupReactiveComponent ],
    exports: [SignupComponent]
})
export class CustomersModule { }