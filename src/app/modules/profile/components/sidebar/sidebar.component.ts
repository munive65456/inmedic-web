import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  option: string;

  constructor(private router: Router) { 
    this.option = "edit";
  }

  goToEdit(){
    this.option = "edit"
  }

  goToHistorial(){
    this.option = "historial"
  }

  // goToEdit(){
  //   this.router.navigate([
  //     '/edit'
  //   ])
  // }

  // goToHistorial(){
  //   this.router.navigate([
  //     '/historial'
  //   ])
  // }

  ngOnInit(): void {
  }

}
