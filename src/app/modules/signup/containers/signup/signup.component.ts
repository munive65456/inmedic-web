import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { trigger,style, transition,animate, state } from '@angular/animations';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  animations:[
    trigger('leftState',[
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(500,style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ]),
    trigger('rightState',[
      state('void', style({
        transform: 'translateX(100%)',
        opacity: 0
      })),
      transition(':enter',[
        animate(500,style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class SignupComponent implements OnInit {

  options: boolean = true;
  clientForm: boolean = false;

  user: UserModel;

  signUpForm: FormGroup;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  signUp(){
    if(!this.signUpForm.invalid){
      // const user = {
      //   email: this.signUpForm.get('email')?.value,
      //   password: this.signUpForm.get('password')?.value,
      //   name: this.signUpForm.get('name')?.value,

      // }
      const user = new UserModel();
      user.name = this.signUpForm.get('name')?.value;
      user.documentNumber = this.signUpForm.get('documentNumber')?.value;
      user.phoneNumber = this.signUpForm.get('phoneNumber')?.value;
      user.address = this.signUpForm.get('address')?.value;
      user.gender = this.signUpForm.get('gender')?.value;
      user.email = this.signUpForm.get('email')?.value;
      user.password = this.signUpForm.get('password')?.value;
      user.birthDate = this.signUpForm.get('birthDate')?.value;
      user.role = 'client';
      

      this.authService.signup(user)
      .subscribe(
        (res)=>{
          console.log('response=> ',res)
        }
      )
    }
  }

  selectRole(){
    this.options = false;
    this.clientForm = true;
  }

}
