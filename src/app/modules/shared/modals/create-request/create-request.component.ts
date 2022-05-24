import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.scss']
})
export class CreateRequestComponent implements OnInit {

  form: FormGroup;
  printedOption: string;

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
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      cc: ['', Validators.required],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      date: ['', Validators.required],
      description: [''],
      servicioSelected: [null],
      modalidadSelected: [null]
    });
  }

  
  printServicio() {
    console.log(this.servicios[this.form.get('servicioSelected')?.value].name);
  }

  printModalidad() {
    console.log(this.modalidades[this.form.get('modalidadSelected')?.value].name);
  }

  printDate(){
    console.log(this.form.get('date')?.value);
  }
}
