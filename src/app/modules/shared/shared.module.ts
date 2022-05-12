import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/container/home/home.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { AboutUsComponent } from './home/components/about-us/about-us.component';



const components = [
  HomeComponent,
  HomePageComponent,
  HeaderComponent,
  AboutUsComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
  ],
  exports: [...components]
})
export class SharedModule { }
