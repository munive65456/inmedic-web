import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() page: string = 'home';
  @Output() activePage = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  sendPage(page: string){
    this.dataService.updateData(page);
  }

  changePage(page: string){
    this.activePage.emit(page);
  }



}
