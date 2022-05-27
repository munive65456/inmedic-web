import { Component, OnInit, OnChanges, ViewChild, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit, OnChanges {

  form: FormGroup;
  check: FormGroup;
  printedOption: string;
  show: boolean;

  name: string;
  cc: string;
  age: string;

  success: number;
  error: number;

  disabled = true;


  requestForm = {
    name: "",
    cc: "",
    age: "",
    email: "",
    date: "",
    time: "",
    description: "",
    servicioSelected: "",
    modalidadSelected: "",
    currentUser: false,
    id: ""
  }
  

  servicios = [
    { name: "ortodonxia", value: 0 },
    { name: "limpieza", value: 1 },
    { name: "blanqueamiento", value: 2 }
  ];

  modalidades = [
    {name: "presencial", value: 0},
    {name: "virtual", value: 1}
  ]

  constructor(private formBuilder: FormBuilder) {
    this.show = true;
    this.success = 1;
    this.error = 1;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.check.get('checkbox')?.value);
  }
  
  checkboxChange(){
    console.log(this.check.get('checkbox')?.value);

  }

  ngOnInit(): void {
    this.check = this.formBuilder.group({
      checkbox: [''],
    });

    this.form = this.formBuilder.group({
      name: [''],
      cc: [''],
      age: [''],
      email: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      description: ['', Validators.required],
      servicioSelected: [null, Validators.required],
      modalidadSelected: [null, Validators.required]
    });

    this.check.get('checkbox')?.valueChanges.subscribe((r) => {
      console.log(r);
      let name = this.form.get('name');
      let cc = this.form.get('cc');
      let age = this.form.get('age');
      switch(r){
        case true: 
          name?.setValidators([Validators.required]);
          cc?.setValidators([Validators.required]);
          age?.setValidators([Validators.required]);
      }
    })
  }

  
  printServicio() {
    console.log(this.servicios[this.form.get('servicioSelected')?.value].name);
  }

  printModalidad() {
  }
  
  printDate(){
    // console.log(this.form.get('date')?.value);
    // console.log(this.form.get('time')?.value);
  }

  submit(){
    if(this.check.get('checkbox')?.value === false){
      //use current user info
      if(this.form.get('date')?.value != "" && this.form.get('time')?.value != "" && this.form.get('description')?.value != "" && this.form.get('servicioSelected')?.value != null && this.form.get('modalidadSelected')?.value != null){
        this.requestForm = {
          name: "",
          cc: "",
          age: "",
          email: "",
          date: this.form.get('date')?.value,
          time: this.form.get('time')?.value,
          description: this.form.get('description')?.value,
          servicioSelected: this.form.get('servicioSelected')?.value,
          modalidadSelected: this.form.get('modalidadSelected')?.value,
          currentUser: true,
          id: localStorage.getItem('user.userId')!,
        }
        this.success = 2;// se muestra success
        alert('success')
        //call service here
      }  
    }else {
      //send form info
      if(this.form.get('name')?.value != "" && this.form.get('cc')?.value != "" && this.form.get('age')?.value != "" && this.form.get('email')?.value != "" && this.form.get('date')?.value != "" && this.form.get('time')?.value != "" && this.form.get('description')?.value != "" && this.form.get('servicioSelected')?.value != "" && this.form.get('modalidadSelected')?.value != "" && localStorage.getItem('user.userId') != null){        
        this.requestForm = {
          name: this.form.get('name')?.value,
          cc: this.form.get('cc')?.value,
          age: this.form.get('age')?.value,
          date: this.form.get('date')?.value,
          email: this.form.get('date')?.value,
          time: this.form.get('time')?.value,
          description: this.form.get('description')?.value,
          servicioSelected: this.form.get('servicioSelected')?.value,
          modalidadSelected: this.form.get('modalidadSelected')?.value,
          currentUser: false,
          id: localStorage.getItem('user.userId')!,
        }
        this.success = 2 // se muestra success
        //call service here
      }else{
        this.success = 3; // se muestra error
      }
    }
  }
  
  showForm(){
    if(this.check.get('checkbox')?.value == true){
      // if(this.form.get('name')?.value != "" && this.form.get('cc')?.value != "" && this.form.get('age')?.value != "" && this.form.get('email')?.value != "" && this.form.get('date')?.value != "" && this.form.get('time')?.value != "" && this.form.get('description')?.value != "" && this.form.get('servicioSelected')?.value != "" && this.form.get('modalidadSelected')?.value != "" && localStorage.getItem('user.userId') != null){
      //   this.disabled = false;
      // }else{
      //   this.disabled = true;
      // }
      this.show = false;
    }else{
      this.show = true;
    }
  }
}
