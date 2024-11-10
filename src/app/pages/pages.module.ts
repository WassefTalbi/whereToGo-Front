import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// page route
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EvenementModule } from './evenement/evenement.module';
import { FormsModule } from '@angular/forms';
import { EventListComponent } from './evenement/event-list/event-list.component';
import { EventUpdateComponent } from './evenement/event-update/event-update.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    EvenementModule,
    SharedModule,
    FormsModule,
    EventListComponent, // Ajouter ici
    EventUpdateComponent // Ajouter ici
  ]
})
export class PagesModule { }
