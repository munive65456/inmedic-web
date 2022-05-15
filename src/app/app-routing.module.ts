import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './modules/profile/profile.module';


const routes: Routes = [
  {
    path: '',
    loadChildren:()=> import('./modules/login/login.module').then((m)=> m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren:() => import('./modules/signup/signup.module').then((m)=>m.SignupModule)
  },
  {
    path: 'profile',
    loadChildren:() => import('./modules/profile/profile.module').then((m)=>m.ProfileModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
