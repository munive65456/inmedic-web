import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './containers/profile/profile.component';
import { EditComponent } from './components/edit/edit.component';
import { HistorialComponent } from './components/historial/historial.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    ProfileComponent,
    EditComponent,
    HistorialComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
  ]
})
export class ProfileModule { }
