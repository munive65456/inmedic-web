import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
