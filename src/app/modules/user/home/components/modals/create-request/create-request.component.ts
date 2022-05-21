import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgControlStatus } from '@angular/forms';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      cc: ['', Validators.required],
      age: ['', Validators.required]
    });
  }

}
