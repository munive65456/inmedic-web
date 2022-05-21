import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPreviewComponent } from './container/doctor-preview/doctor-preview.component';

const routes: Routes = [
  {
    path: 'doctor/:id',
    component: DoctorPreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorPreviewRoutingModule { }
