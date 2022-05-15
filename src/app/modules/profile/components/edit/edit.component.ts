import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  image = "assets/build/images/big/doctors.jpg"
  title = "Title"
  message = "Quis eiusmod non do exercitation nostrud proident."

  constructor() { }

  ngOnInit(): void {
  }

}
