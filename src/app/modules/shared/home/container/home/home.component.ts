import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public page = "home";

  constructor() { }

  ngOnInit(): void {
  }

  getPage(page: string){
    this.page = page;
    console.log('PAGE => ',page)
  }

}
