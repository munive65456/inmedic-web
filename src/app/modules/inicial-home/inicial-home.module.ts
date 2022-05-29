import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicialHomeRoutingModule } from './inicial-home-routing.module';
import { HomeComponent } from './container/home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    InicialHomeRoutingModule
  ]
})
export class InicialHomeModule { }
