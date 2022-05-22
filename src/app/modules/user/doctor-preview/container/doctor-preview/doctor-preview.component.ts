import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-preview',
  templateUrl: './doctor-preview.component.html',
  styleUrls: ['./doctor-preview.component.css']
})
export class DoctorPreviewComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
