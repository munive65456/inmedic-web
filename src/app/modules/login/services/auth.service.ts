import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService{

  public BEARER = 'Bearer ';


  constructor(private http: HttpClient){}

  login(user:any){
    return this.http.post(
      environment.URL_GLOBAL + environment.host.ms_security.methods.login,
      user
    )
  }

  signup(info: any){
    return this.http.post(
      environment.URL_GLOBAL + environment.host.ms_security.searchMethods.signup,
      info,
    )
  }

  saveLogin(
    accessToken: string,
    role: string,
    userId: string
  ){
    localStorage.setItem('user.token', accessToken);
    localStorage.setItem('user.userId', userId);
    localStorage.setItem('user.role', role);
  }

  logOut(){
    localStorage.clear();
    document.location.replace('/')
    // this.router.navigate(['/'])
  }

  getBearerToken(){
    const token = this.getToken();
    return new HttpHeaders({
      Authorization: this.BEARER + token,
    });
  }

  getToken(){
    return (
      sessionStorage.getItem('user.token') || localStorage.getItem('user.token')
    );
  }
}
