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
<<<<<<< HEAD
    path: 'profile',
    loadChildren:() => import('./modules/profile/profile.module').then((m)=>m.ProfileModule)
=======
    path: 'user',
    loadChildren:() => import('./modules/user/user.module').then((m)=> m.UserModule)
>>>>>>> d3397898c3c1936530b8a0170fcf6c3428a0ea82
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
