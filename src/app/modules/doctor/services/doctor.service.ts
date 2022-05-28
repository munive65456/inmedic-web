import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AuthService } from "../../login/services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class DoctorService{
  constructor(private http: HttpClient, private authService: AuthService){}

  getAppointments(id:string){
    return this.http.get(
      environment.URL_GLOBAL + environment.host.appointments.methods.getAppointments + id,
      {
        headers: this.authService.getBearerToken()
      }
    )
  }

  rechazarCita(params:any){
    return this.http.post(
      environment.URL_GLOBAL + environment.host.ms_security.searchMethods.rechazarCita,
      params,
      {
        headers: this.authService.getBearerToken()
      }
    )
  }
}
