import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/login/services/auth.service';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  userForm: FormGroup;

  page: number = 1;
  

  formInfo = {
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    type: "",
    document: "",
    genero: "",
    birthdate: "",
  }

  userInfo: {
    name: "",
    lastname: "",
    documentNumber: "",
    phoneNumber: "",
    address: "",
    gender: "",
    email: "",
    password: "",
    birthDate: "",
  }

  constructor(private service:AuthService, private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      phone: [''],
      address: [''],
      city: [''],
      country: [''],
      document: [''],
      gender: [''],
      birthdate: [''],
    });
  }
  onSubmit(){

  }

  // initForm():FormGroup{
  //   return this.fb.group({
  //     name: ['', [Validators.required]],
  //     email: ['', [Validators.required]],
  //     password: ['', [Validators.required, Validators.minLength(10)]],
  //     phone: [''],
  //     address: [''],
  //     city: [''],
  //     country: [''],
  //     document: [''],
  //     gender: [''],
  //     birthdate: [''],
  //   })
  // }

  next(){
    this.page++;
  }
  back(){
    this.page--;
  }
  signup(){

    this.formInfo = {
      name: "",
      email: "",
      password: "",
      phone: "",
      address: "",
      city: "",
      country: "",
      type: "",
      document: "",
      genero: "",
      birthdate: "",
    }

    this.userInfo = {
      name: this.userForm.get('date')?.value,
      lastname: "",
      documentNumber: this.userForm.get('document')?.value,
      phoneNumber: this.userForm.get('phone')?.value,
      address: this.userForm.get('address')?.value,
      gender: this.userForm.get('genero')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      birthDate: this.userForm.get('birthdate')?.value,
    }

    try{
      this.service.signup(this.userInfo)
      .subscribe(
        (res:any)=>{
          console.log(res);         
        }
      )
    }catch(err){
      console.log('ERR =>',err)
    }
  }

}
