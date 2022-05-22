import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorPreviewRoutingModule } from './doctor-preview-routing.module';
import { DoctorPreviewComponent } from './container/doctor-preview/doctor-preview.component';


@NgModule({
  declarations: [
    DoctorPreviewComponent
  ],
  imports: [
    CommonModule,
    DoctorPreviewRoutingModule
  ]
})
export class DoctorPreviewModule { }
