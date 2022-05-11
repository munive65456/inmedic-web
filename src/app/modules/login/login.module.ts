import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './containers/login/login.component';
import { HeaderComponent } from '../home/components/header/header.component';
import { AboutUsComponent } from '../home/components/about-us/about-us.component';
import { HomeComponent } from '../home/container/home/home.component';
import { HomePageComponent } from '../home/components/home-page/home-page.component';


@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    AboutUsComponent,
    HomeComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
