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
}
