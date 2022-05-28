import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';
import { ApproveDateComponent } from './modals/approve-date/approve-date.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    ConfirmComponent,
    ApproveDateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
