import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('btnDetails')
  btnModal: ElementRef;

  infoCita: any;


  loader = false;

  pendingAppoinments: any[] = [];
  approvedAppoinments: any[] = [];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.getDoctorAppoinments();
  }

  getDoctorAppoinments(){
    this.loader = true;
    if(localStorage.getItem('user.userId')){
      const doctorId = localStorage.getItem('user.userId') || '';
      try{
        this.doctorService.getAppointments(doctorId)
        .subscribe(
          (res:any)=>{
            res.map((filtered:any)=>{
              if(filtered.status === 'pending'){
                filtered.name = this.shortName(filtered.name);
                if(filtered.edad){

                  filtered.edad = this.calculateAge(filtered.edad);
                }
                if(filtered.age){
                  filtered.age = this.calculateAge(filtered.age);
                }
                if(filtered.birthDay){

                  filtered.edad = this.calculateAge(filtered.birthDay);
                }
                this.pendingAppoinments.push(filtered)
              }else if(filtered.status === 'approved'){
                filtered.name = this.shortName(filtered.name);
                if(filtered.edad){

                  filtered.edad = this.calculateAge(filtered.edad);
                }
                if(filtered.age){
                  filtered.age = this.calculateAge(filtered.age);
                }
                if(filtered.birthDay){

                  filtered.edad = this.calculateAge(filtered.birthDay);
                }
                this.approvedAppoinments.push(filtered)
              }
            } )
          }
        )
      }catch(err){
        console.log('err => ',err)
      }
    }
  }

  shortName(name:string):string{
    const size = name?.length;
    if(size > 1){
      const tempName = name.split(' ')[0] + ' '+ name.split(' ')[1];
      return tempName;
    }else if(size === 1){
      return name;
    }else{
      return 'No definido';
    }
  }

  calculateAge(birthday: string):string {
    const hoy = new Date();
    const array_fecha = birthday.split('/');
    if (array_fecha.length!=3){
      return 'No disponible'
    }
    const year = parseInt(array_fecha[2]);
    if (isNaN(year)){
      return 'No disponible'
    }
    const month = parseInt(array_fecha[1]);
    if (isNaN(month)){
      return 'No disponible'
    }
    const day = parseInt(array_fecha[2]);
    if (isNaN(day)){
      return 'No disponible'
    }

    const edad = hoy.getFullYear() - year - 1;

    if (hoy.getMonth() + 1 - month < 0){
      return edad+''
    }

    if (hoy.getMonth() + 1 - month > 0){
      return edad+1+''
    }

    if (hoy.getUTCDate() - day >= 0)
       return edad + 1 + ''

    return edad + ''
  }

  showModal(info: any){
    this.infoCita = info;
    this.btnModal.nativeElement.click();
  }

}
