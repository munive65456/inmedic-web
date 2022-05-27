import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { CreateRequestComponent } from 'src/app/modules/shared/modals/create-request/create-request.component';
import { SearchService } from '../../../services/search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctor-preview',
  templateUrl: './doctor-preview.component.html',
  styleUrls: ['./doctor-preview.component.css']
})
export class DoctorPreviewComponent implements OnInit {

  doctorID: any;
  loader = false;
  doctorInfo: any;

  reviews = [
    { name: "Munive", date: "12-04-2022", text: "Ad nostrud dolore magna excepteur sit qui reprehenderit elit ad fugiat Lorem aute. Fugiat nulla cillum enim irure id magna ea eiusmod. Enim exercitation anim officia amet labore ad. Eiusmod tempor dolor occaecat quis incididunt aute. Tempor sunt aliquip fugiat ipsum ea minim quis fugiat. Sint ea veniam irure cillum ea sint Lorem ad.Id nulla commodo nisi est officia reprehenderit irure aliqua quis duis deserunt fugiat ad tempor." },
    { name: "Daniel", date: "10-03-2022", text: "Cillum Lorem anim adipisicing est ullamco do. Aute cupidatat Lorem nulla anim proident nostrud ullamco mollit. Duis esse non enim do et magna cillum aliqua est nisi incididunt laboris eiusmod. Est officia reprehenderit in enim ipsum consequat eiusmod ut nulla dolor dolor. Incididunt laboris consequat ad sunt sunt consequat qui. Aliquip nisi cillum eiusmod officia eiusmod ex laboris pariatur in in aliqua nulla." },
    { name: "Jose", date: "4-03-2022", text: "Aliqua eu in officia tempor. Enim minim sit ipsum aute. Eu cillum non tempor enim ipsum non ad cupidatat cupidatat officia velit. Anim Lorem consectetur pariatur consequat nulla in sint non." }
  ];




  constructor(private location: Location,
              private route: ActivatedRoute,
              private searchService: SearchService) { }

  @ViewChild('btnDetails')
  btnModal: ElementRef;

  showModal(){
    this.btnModal.nativeElement.click();
  }

  ngOnInit(): void {
    this.auxInit();
  }
  auxInit(){
    this.route.params.subscribe((res:any) =>{
      this.doctorID = res.id;
      this.getDoctorProfile();
    })
  }


  getDoctorProfile(){
    this.loader = true;
    try{
      this.searchService.getProfileDoctor(this.doctorID)
      .subscribe(
        (res:any)=>{
          this.doctorInfo = res[0];
          this.loader = false;
          console.log('RESPONSE => ',this.doctorInfo)
        }
      )
    }catch(err){
      this.loader = false;
      console.log('ERR =>',err)
    }
    this.loader = false;

  }

  goBack(){
    this.location.back();
  }

}
