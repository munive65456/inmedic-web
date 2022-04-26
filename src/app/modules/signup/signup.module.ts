import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { SignupDoctorComponent } from './components/signup-doctor/signup-doctor.component';


@NgModule({
  declarations: [
    SignupComponent,
    SignupClientComponent,
    SignupDoctorComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
