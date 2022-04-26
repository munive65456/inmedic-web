import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {

  userForm: FormGroup;

  page: number = 1;

  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.initForm();
  }
  onSubmit(){

  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(10)]],
      phone: [''],
      address: [''],
      city: [''],
      state: [''],
      documentNumber: [''],
      gender: [''],
      birthDate: [''],
    })
  }

  next(){
    this.page++;
  }
  back(){
    this.page--;
  }

  capturar() {
    this.verSeleccion = this.opcionSeleccionado;
    console.log(this.verSeleccion);
    
  }

}
