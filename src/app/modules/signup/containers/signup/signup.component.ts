import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { trigger,style, transition,animate, state } from '@angular/animations';

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

  options: boolean = false;
  clientForm: boolean = true;

  user: UserModel;

  signUpForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  signUp(){

  }

  selectRole(){
    this.options = false;
    this.clientForm = true;
  }

}
