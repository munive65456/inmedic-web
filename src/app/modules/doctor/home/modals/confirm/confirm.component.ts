import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @ViewChild('approveDateBtn')
  btnApproveModal: ElementRef;

  @Input() infoCita: any;

  constructor() { }

  ngOnInit(): void {

  }

  approveDate(){
    if(this.infoCita?.tipoConsult === 'virtual'){

      this.btnApproveModal.nativeElement.click();
    }
  }

}
