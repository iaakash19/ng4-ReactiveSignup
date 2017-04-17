import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppNavModule } from './app-nav/app-nav.module';

import { CustomersModule } from './customers/customers.module';
import { SignupComponent } from './customers/signup/signup.component';
import { SignupReactiveComponent } from './customers/signup-reactive/signup-reactive.component';

import { AppComponent } from './app.component';


const ROUTES = [
  {
    path: 'tdf', component: SignupComponent
  },
  {
    path: 'rf', component: SignupReactiveComponent
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    AppNavModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
