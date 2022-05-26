import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {

  @Input() data: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeDoctorInfo(){
    this.router.navigate(['user/preview/doctor', this.data.idDoctor])
  }

}
