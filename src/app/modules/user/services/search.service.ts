import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { AuthService } from "../../login/services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class SearchService{
  constructor(private http: HttpClient, private authService: AuthService){}

  mainSearch(search: any){
    return this.http.post(
      environment.URL_GLOBAL + environment.host.ms_security.searchMethods.globalSearch,
      search,
      {
        headers: this.authService.getBearerToken()
      }
    )
  }

  getProfileDoctor(id:string){
    return this.http.get(
      environment.URL_GLOBAL + environment.host.ms_security.searchMethods.profileDoctor + id,
      {
        headers: this.authService.getBearerToken()
      }
    )
  }

  createRequest(request: any){
    return this.http.post(
      environment.URL_GLOBAL + environment.host.ms_security.searchMethods.createRequest,
      request,
      {
        headers: this.authService.getBearerToken()
      }
    )
  }
}
