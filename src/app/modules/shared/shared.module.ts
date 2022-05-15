import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/container/home/home.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ServicesComponent } from './home/components/services/services.component';
import { PublicHeaderComponent } from './public-header/public-header.component';



const components = [
  HomeComponent,
  HomePageComponent,
  HeaderComponent,
  ServicesComponent,
  PublicHeaderComponent
]

@NgModule({
  declarations: [...components, ServicesComponent, PublicHeaderComponent],
  imports: [
    CommonModule,
  ],
  exports: [...components]
})
export class SharedModule { }
