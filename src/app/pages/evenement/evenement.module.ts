import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvenementRoutingModule } from './evenement-routing.module';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { EventAddComponent } from './event-add/event-add.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ EventAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule, 
    EvenementRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class EvenementModule { }
