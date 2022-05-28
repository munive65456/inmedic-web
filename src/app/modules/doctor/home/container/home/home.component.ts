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

  approved = [
    { name: "Munive", date: "12-04-2022", text: "Ad nostrud dolore magna excepteur sit qui reprehenderit elit ad fugiat Lorem aute. Fugiat nulla cillum enim irure id magna ea eiusmod. Enim exercitation anim officia amet labore ad. Eiusmod tempor dolor occaecat quis incididunt aute. Tempor sunt aliquip fugiat ipsum ea minim quis fugiat. Sint ea veniam irure cillum ea sint Lorem ad.Id nulla commodo nisi est officia reprehenderit irure aliqua quis duis deserunt fugiat ad tempor." },
    { name: "Daniel", date: "10-03-2022", text: "Cillum Lorem anim adipisicing est ullamco do. Aute cupidatat Lorem nulla anim proident nostrud ullamco mollit. Duis esse non enim do et magna cillum aliqua est nisi incididunt laboris eiusmod. Est officia reprehenderit in enim ipsum consequat eiusmod ut nulla dolor dolor. Incididunt laboris consequat ad sunt sunt consequat qui. Aliquip nisi cillum eiusmod officia eiusmod ex laboris pariatur in in aliqua nulla." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." },

  ];

  pending = [
    { name: "Munive", date: "12-04-2022", text: "Ad nostrud dolore magna excepteur sit qui reprehenderit elit ad fugiat Lorem aute. Fugiat nulla cillum enim irure id magna ea eiusmod. Enim exercitation anim officia amet labore ad. Eiusmod tempor dolor occaecat quis incididunt aute. Tempor sunt aliquip fugiat ipsum ea minim quis fugiat. Sint ea veniam irure cillum ea sint Lorem ad.Id nulla commodo nisi est officia reprehenderit irure aliqua quis duis deserunt fugiat ad tempor." },
    { name: "Daniel", date: "10-03-2022", text: "Cillum Lorem anim adipisicing est ullamco do. Aute cupidatat Lorem nulla anim proident nostrud ullamco mollit. Duis esse non enim do et magna cillum aliqua est nisi incididunt laboris eiusmod. Est officia reprehenderit in enim ipsum consequat eiusmod ut nulla dolor dolor. Incididunt laboris consequat ad sunt sunt consequat qui. Aliquip nisi cillum eiusmod officia eiusmod ex laboris pariatur in in aliqua nulla." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." }
  ]


  loader = false;

  pendingAppoinments: any[] = [];

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
              }
            } )
            console.log('RES => ',this.pendingAppoinments)
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
      const tempName = name.split(' ')[0] + ' '+ name.split(' ')[0];
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
    console.log(info);
    this.infoCita = info;
    this.btnModal.nativeElement.click();
  }

}
