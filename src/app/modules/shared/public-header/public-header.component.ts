import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../login/services/auth.service';

@Component({
  selector: 'app-public-header',
  templateUrl: './public-header.component.html',
  styleUrls: ['./public-header.component.css']
})
export class PublicHeaderComponent implements OnInit {

  showNotifications = true;

  constructor(private authService: AuthService) {
    if(localStorage.getItem('user.role')! === 'doctor'){
      this.showNotifications = false;
    }
  }

  ngOnInit(): void {
    if(localStorage.getItem('user.role')! === 'doctor'){
      this.showNotifications = false;
    }
  }

  logOut(){
    this.authService.logOut();
  }

}
