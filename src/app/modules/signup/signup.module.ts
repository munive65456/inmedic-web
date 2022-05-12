import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupDoctorComponent } from './components/signup-doctor/signup-doctor.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignupComponent,
    SignupClientComponent,
    SignupDoctorComponent,
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class SignupModule { }
