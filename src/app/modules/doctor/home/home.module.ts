import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';
import { RejectDateComponent } from './modals/reject-date/reject-date.component';
import { ApproveDateComponent } from './modals/approve-date/approve-date.component';

@NgModule({
  declarations: [
    HomeComponent,
    ConfirmComponent,
    RejectDateComponent,
    ApproveDateComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
