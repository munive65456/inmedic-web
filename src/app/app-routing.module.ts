import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './modules/login/login.module';


const routes: Routes = [
  {
    path: '',
    loadChildren:()=> import('./modules/inicial-home/inicial-home.module').then((m)=> m.InicialHomeModule)
  },
  {
    path: 'signup',
    loadChildren:() => import('./modules/signup/signup.module').then((m)=>m.SignupModule)
  },
  {
    path: 'user',
    loadChildren:() => import('./modules/user/user.module').then((m)=> m.UserModule)
  },
  {
    path: 'doctor',
    loadChildren:()=> import('./modules/doctor/doctor.module').then((m)=> m.DoctorModule)
  },
  {
    path: 'login',
    loadChildren:()=> import('./modules/login/login.module').then((m)=> m.LoginModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
