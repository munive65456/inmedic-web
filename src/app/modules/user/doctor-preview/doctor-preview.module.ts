import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DoctorPreviewRoutingModule } from './doctor-preview-routing.module';
import { DoctorPreviewComponent } from './container/doctor-preview/doctor-preview.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    DoctorPreviewComponent,
  ],
  imports: [
    CommonModule,
    DoctorPreviewRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class DoctorPreviewModule { }
