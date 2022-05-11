import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/core/models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { trigger,style, transition,animate, state } from '@angular/animations';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations:[
    trigger('rightState',[
      state('enter', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':leave',[
        animate(500,style({
          transform: 'translateX(100%)',
          opacity: 1
        }))
      ])
    ]),
    trigger('leftState',[
      state('enter', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition(':leave',[
        animate(500,style({
          transform: 'translateX(-100%)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  subscription: Subscription;
  page: string;

  exit = true;
  loginForm: FormGroup;

  user: UserModel;
  rememberme: boolean;

  constructor(
      private readonly fb: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private dataService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.initForm();
    this.getPage();
  }

  initForm(): FormGroup{
    return this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  onSubmit():void{

  }

  login(){
    if(!this.loginForm.invalid){
      const user = {
        email: this.loginForm.get('email')?.value,
        password: this.loginForm.get('password')?.value
      }
      this.authService.login(user)
      .subscribe(
        (res)=>{
          console.log('response=> ',res)
        }
      )
    }
  }


  signUpPage(){
    this.exit = false;
    const delay = timer(500);
    delay.subscribe((n)=>{
      this.router.navigate(['/signup']);
    })

  }

  getPage(){
    this.subscription = this.dataService.share.subscribe(get => this.page = get)
  }

}
