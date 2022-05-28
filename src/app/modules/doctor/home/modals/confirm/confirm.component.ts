import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() infoCita: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.infoCita);
    
  }

}
