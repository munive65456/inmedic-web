import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './containers/signup/signup.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';

const routes: Routes = [
  {
    path:'',
    component: SignupComponent,
    children: [
      {
        path: 'client/', component: SignupClientComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
