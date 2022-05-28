import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    SharedModule,
  ]
})
export class DoctorModule { }
