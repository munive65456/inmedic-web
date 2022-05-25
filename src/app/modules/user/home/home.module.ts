import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './container/home/home.component';
import { SharedModule } from '../../shared/shared.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
