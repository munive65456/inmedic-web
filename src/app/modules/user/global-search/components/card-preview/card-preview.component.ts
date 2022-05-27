import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../../services/search.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-preview',
  templateUrl: './card-preview.component.html',
  styleUrls: ['./card-preview.component.css']
})
export class CardPreviewComponent implements OnInit {

  infoDoctor: any;

  @Input() data: any;
  constructor(private router: Router,
              private searchService: SearchService,
              private dataService: DataService) { }

  ngOnInit(): void {
  }

  seeDoctorInfo(){
    this.router.navigate(['user/preview/doctor', this.data.idDoctor])
  }

}
