import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GlobalSearchRoutingModule } from './global-search-routing.module';
import { GlobalSearchComponent } from './container/global-search/global-search.component';
import { SharedModule } from '../../shared/shared.module';
import { CardPreviewComponent } from './components/card-preview/card-preview.component';


@NgModule({
  declarations: [
    GlobalSearchComponent,
    CardPreviewComponent
  ],
  imports: [
    CommonModule,
    GlobalSearchRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class GlobalSearchModule { }
