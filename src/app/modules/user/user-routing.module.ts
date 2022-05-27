import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m)=>m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./global-search/global-search.module').then((m)=>m.GlobalSearchModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./doctor-preview/doctor-preview.module').then((m)=>m.DoctorPreviewModule)
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
