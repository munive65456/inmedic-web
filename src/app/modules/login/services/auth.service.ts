import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http: HttpClient){}

  login(user:any){
    return this.http.post(
      environment.URL_CLIENT + environment.host.ms_security.methods.login,
      user
    )
  }
}
