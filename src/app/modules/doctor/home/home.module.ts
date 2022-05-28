import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { ConfirmComponent } from './modals/confirm/confirm.component';


@NgModule({
  declarations: [
    HomeComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
