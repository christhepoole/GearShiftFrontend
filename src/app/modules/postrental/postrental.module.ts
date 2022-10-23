import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostrentalRoutingModule } from './postrental-routing.module';
import { PostrentalComponent } from './postrental.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PostrentalComponent
  ],
  imports: [
    CommonModule,
    PostrentalRoutingModule,
    ReactiveFormsModule,   
  ]
})
export class PostrentalModule { }
