import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


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
    path: 'user',
    loadChildren:() => import('./modules/user/user.module').then((m)=> m.UserModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
