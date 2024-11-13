import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// page route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EvenementModule } from './evenement/evenement.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
   
    SharedModule,
    FormsModule,
   
  ]
})
export class PagesModule { }
