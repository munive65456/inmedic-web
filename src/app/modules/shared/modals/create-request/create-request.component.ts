import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/modules/user/services/search.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit{

  form: FormGroup;
  check: FormGroup;
  printedOption: string;
  show: boolean;

  modalidad: string;
  servicio: string;

  doctorID: string

  success: number;
  error: number;

  disabled = true;

  @Input() doctorServices: any;


  requestForm = {
    name: "",
    DocumentNumber: "",
    age: "",
    email: "",
    date: "",
    hour: "",
    observation: "",
    services: "",
    tipoConsult: "",
    checkBox: false,
    idClient: localStorage.getItem('user.userId')!,
    idDoctor: localStorage.getItem('user.userId')!,
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

  constructor(private searchService: SearchService, private formBuilder: FormBuilder, private route: ActivatedRoute,) {
    this.show = true;
    this.success = 1;
    this.error = 1;
  }



  ngOnInit(): void {
    this.auxInit();

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
      description: [''],
      servicioSelected: [null, Validators.required],
      modalidadSelected: [null, Validators.required]
    });

    this.check.get('checkbox')?.valueChanges.subscribe((r) => {
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

  printDate(){
  }

  auxInit(){
    this.route.params.subscribe((res:any) =>{
      this.doctorID = res.id;
    })
  }


  submit(){
    if(this.check.get('checkbox')?.value === false){
      //use current user info
      //if(this.form.get('date')?.value != "" && this.form.get('time')?.value != "" && this.form.get('description')?.value != "" && this.form.get('servicioSelected')?.value != null && this.form.get('modalidadSelected')?.value != null){
        this.requestForm = {
          name: "",
          DocumentNumber: "",
          age: "",
          email: "",
          date: this.form.get('date')?.value,
          hour: this.form.get('time')?.value,
          observation: this.form.get('description')?.value,
          services: this.form.get('servicioSelected')?.value,
          tipoConsult: this.form.get('modalidadSelected')?.value,
          checkBox: false,
          idClient: localStorage.getItem('user.userId')!,
          idDoctor: this.doctorID,
        }
        try{
          this.searchService.createRequest(this.requestForm)
          .subscribe(
            (res:any)=>{
              this.success = 2 // se muestra success
            }
          )
        }catch(err){
          console.log('ERR =>',err)
        }

        this.success = 2;// se muestra success
        //call service here
      //}
    }else {
      //send form info
      //if(this.form.get('name')?.value != "" && this.form.get('cc')?.value != "" && this.form.get('age')?.value != "" && this.form.get('email')?.value != "" && this.form.get('date')?.value != "" && this.form.get('time')?.value != "" && this.form.get('description')?.value != "" && this.form.get('servicioSelected')?.value != "" && this.form.get('modalidadSelected')?.value != "" && localStorage.getItem('user.userId') != null){

        if(this.form.get('modalidadSelected')?.value == 0){
          this.modalidad = "presencial"
        }else{
          this.modalidad = "virtual"
        }
      this.requestForm = {
          name: this.form.get('name')?.value,
          DocumentNumber: this.form.get('cc')?.value,
          age: this.form.get('age')?.value,
          email: this.form.get('email')?.value,
          date: this.form.get('date')?.value,
          hour: this.form.get('time')?.value,
          observation: this.form.get('description')?.value,
          services: this.form.get('servicioSelected')?.value,
          tipoConsult: this.modalidad,
          checkBox: false,
          idClient: localStorage.getItem('user.userId')!,
          idDoctor: this.doctorID,
        }
        try{
          this.searchService.createRequest(this.requestForm)
          .subscribe(
            (res:any)=>{
              this.success = 2 // se muestra success
            }
          )
        }catch(err){
          console.log('ERR =>',err)
        }

        //call service here
      // }else{
      //   this.success = 3; // se muestra error
      // }
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
