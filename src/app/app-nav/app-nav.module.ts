import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppNavComponent } from './app-nav/app-nav.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AppNavComponent],
  exports: [AppNavComponent]
})
export class AppNavModule { }
