import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  globalSearch: string = "";
  city: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(){
    if(this.globalSearch.length){
      const searchForm = {
        search: this.globalSearch
      }
      try{
        this.searchService.mainSearch(searchForm)
        .subscribe(
          (res) =>{
            console.log('RES => ',res)
          }
        )
      }catch(error){

      }
    }
  }
}
