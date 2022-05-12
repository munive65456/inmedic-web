import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/container/home/home.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ServicesComponent } from './home/components/services/services.component';



const components = [
  HomeComponent,
  HomePageComponent,
  HeaderComponent,
  ServicesComponent
]

@NgModule({
  declarations: [...components, ServicesComponent],
  imports: [
    CommonModule,
  ],
  exports: [...components]
})
export class SharedModule { }
