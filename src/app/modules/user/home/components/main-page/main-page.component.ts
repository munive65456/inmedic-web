import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  resultSearch:any;
  globalSearch: string = "";
  city: string = "";
  loader = false;

  constructor(private searchService: SearchService,
              private dataService: DataService,
              private router: Router) { }

  ngOnInit(): void {
  }

  search(){
    if(this.globalSearch.length || this.city.length){
      this.loader=true;
      const searchForm = {
        search: this.globalSearch,
        city: this.city
      }
      try{
        this.searchService.mainSearch(searchForm)
        .subscribe(
          (res: any) =>{
            this.resultSearch = res.data;
            this.dataService.updateData(this.resultSearch);
            this.router.navigate(['/user/search'])
          }
        )
      }catch(error){

      }
    }
  }
}
