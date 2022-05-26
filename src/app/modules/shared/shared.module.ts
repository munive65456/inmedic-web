import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/container/home/home.component';
import { HomePageComponent } from './home/components/home-page/home-page.component';
import { HeaderComponent } from './home/components/header/header.component';
import { ServicesComponent } from './home/components/services/services.component';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { DoctorPreviewComponent } from './home/components/doctor-preview/doctor-preview.component';
import { LoaderComponent } from './loader/loader.component';
import { CreateRequestComponent } from './modals/create-request/create-request.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

const components = [
  HomeComponent,
  HomePageComponent,
  HeaderComponent,
  ServicesComponent,
  PublicHeaderComponent,
  LoaderComponent,
]

@NgModule({
  declarations: [...components, ServicesComponent, PublicHeaderComponent, DoctorPreviewComponent, LoaderComponent, CreateRequestComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    //AppRoutingModule,
    RouterModule  
  ],
  exports: [...components, DoctorPreviewComponent, CreateRequestComponent]
})
export class SharedModule { }
