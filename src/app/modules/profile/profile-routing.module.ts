import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './components/edit/edit.component';
import { HistorialComponent } from './components/historial/historial.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children:[
      // {
      //   path: 'edit',
      //   component: EditComponent,
      // },
      // {
      //   path: 'historial',
      //   component: HistorialComponent,
      // }
      {
        path: '',
        component: SidebarComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
