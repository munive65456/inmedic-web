import { Component, Input, OnInit } from '@angular/core';
import { DoctorService } from '../../../services/doctor.service';

@Component({
  selector: 'app-approve-date',
  templateUrl: './approve-date.component.html',
  styleUrls: ['./approve-date.component.css']
})
export class ApproveDateComponent implements OnInit {

  link: string = '';

  @Input() dateId: any;

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
  }

  aproveDateMethod(){
    const data = {
      id: this.dateId,
      url: this.link
    }
    try{
      this.doctorService.approveDate(data)
      .subscribe(
        (res)=>{
          alert('Cita generada exitosamente')
        }
      )
    }catch(err){
      console.log('EERR => ',err)
    }
  }

  getLink(event: any){
    this.link = event;
  }

}
