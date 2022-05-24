import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CreateRequestComponent } from 'src/app/modules/shared/modals/create-request/create-request.component';

@Component({
  selector: 'app-doctor-preview',
  templateUrl: './doctor-preview.component.html',
  styleUrls: ['./doctor-preview.component.css']
})
export class DoctorPreviewComponent implements OnInit {

  constructor(private location: Location) { }

  @ViewChild('btnDetails')
  btnModal: ElementRef;

  showModal(){
    this.btnModal.nativeElement.click();
  }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
