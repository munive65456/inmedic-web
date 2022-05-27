import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SearchService } from '../../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  subscription: Subscription;
  resultado: any;
  globalSearch: string = "";
  city: string = "";
  resultSearch: any;

  loader=true;

  constructor(private dataService: DataService,
              private searchService: SearchService,
              private router: Router) { }

  ngOnInit(): void {
    this.getResultSerch();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getResultSerch(){
    this.loader = true;
    this.subscription = this.dataService.share.subscribe((res: any) =>{
      this.resultado = res;
      this.loader = false;
    });

  }

  search(){

    if(this.globalSearch.length || this.city.length){
      this.resultado = null;
      this.resultSearch = null;
      this.loader=true;
      const searchForm = {
        search: this.globalSearch,
        city: this.city
      }
      try{
        this.searchService.mainSearch(searchForm)
        .subscribe(
          (res: any) =>{
            if(res.data?.length){
              this.resultSearch = res.data;
            }else{
              alert('No encontramos médicos, por favor intentalo de nuevo')
            }
            this.loader = false;
            // this.router.navigate(['/user/search'])
          }
        )
      }catch(error){
        console.log('ERROR')
        this.loader = false;
      }
    }
    this.loader = false;
  }

  seeDoctorInfo(id: any){
    this.router.navigate(['./preview/doctor', id])
    // ['../preview/doctor', 0]
  }

}
