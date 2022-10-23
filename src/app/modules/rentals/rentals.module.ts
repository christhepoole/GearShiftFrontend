import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalsRoutingModule } from './rentals-routing.module';
import { RentalsComponent } from './rentals.component';


@NgModule({
  declarations: [
    RentalsComponent
  ],
  imports: [
    CommonModule,
    RentalsRoutingModule
  ]
})
export class RentalsModule { }
