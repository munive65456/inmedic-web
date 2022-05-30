import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/login/services/auth.service';
import { Router } from '@angular/router';

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

  userInfo = {
    name: "",
    lastName: "",
    documentNumber: "",
    phoneNumber: "",
    address: "",
    gender: "",
    email: "",
    password: "",
    birthDate: "",
  }

  constructor(private route:Router, private service:AuthService, private readonly fb: FormBuilder) { }

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
      type: [''],
      genero: ['']
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
      name: this.userForm.get('name')?.value,
      lastName: " ",
      documentNumber: this.userForm.get('document')?.value,
      phoneNumber: this.userForm.get('phone')?.value,
      address: this.userForm.get('address')?.value,
      gender: this.userForm.get('genero')?.value,
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      birthDate: this.userForm.get('birthdate')?.value,
    }

    // this.userInfo = {
    //   name: "kang",
    //   lastName: "lei",
    //   documentNumber: "857491565",
    //   phoneNumber: "30125465454",
    //   address: "Cra 22b 25 69",
    //   gender: "m",
    //   email: "kang@gmail.com",
    //   password: "123",
    //   birthDate: "12/06/2000",
    // }
  

    try{
      this.service.signup(this.userInfo)
      .subscribe(
        (res:any)=>{
          alert('Usuario registrado exitosamente')
          this.route.navigate(['/login']);
        }
      )
    }catch(err){
      console.log('ERR =>',err)
    }
  }

}
