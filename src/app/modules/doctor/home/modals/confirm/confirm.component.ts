import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @ViewChild('approveDateBtn')
  btnApproveModal: ElementRef;

  @Input() infoCita: any;

  showform = true;

  razon: string;

  params = {
    id: "",
    reason: ""
  }

  constructor(private service: DoctorService) { }

  ngOnInit(): void {

  }

  approveDate(){
    if(this.infoCita?.tipoConsult === 'virtual'){
      this.btnApproveModal.nativeElement.click();
  }else{
    this.aprobarCita();
  }
  }

  aprobarCita(){
    const data = {
      id: this.infoCita._id,
      url: ''
    }

    this.service.approveDate(data).subscribe(
      (res)=>{

      }
    )
  }

  getVal(razon: any){
    this.razon = String(razon);
  }

  aceptar(){

  }

  rechazar(){
    this.showform = false;
  }

  enviar(){

    this.params = {
      "id": this.infoCita._id,
      "reason": this.razon
    }
    try{
      this.service.rechazarCita(this.params)
      .subscribe(
        (res:any)=>{
          this.showform = true;
        }
      )
    }catch(err){
      console.log('ERR =>',err)
    }
  }

}
