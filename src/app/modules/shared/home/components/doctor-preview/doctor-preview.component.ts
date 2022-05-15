import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-preview',
  templateUrl: './doctor-preview.component.html',
  styleUrls: ['./doctor-preview.component.css']
})
export class DoctorPreviewComponent implements OnInit {

  @Input() image: string;
  @Input() title: string;
  @Input() message: string;

  constructor() { }

  ngOnInit(): void {
  }

}
