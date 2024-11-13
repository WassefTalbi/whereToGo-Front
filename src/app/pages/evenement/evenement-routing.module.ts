import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventAddComponent } from './event-add/event-add.component';
import { EventUpdateComponent } from './event-update/event-update.component';
import { EventListComponent } from './event-list/event-list.component';


const routes: Routes = [
  

    { path: 'add', component: EventAddComponent },
    { path: 'update/:id', component: EventUpdateComponent },
    { path: 'list', component: EventListComponent },



];

@NgModule({
  imports: [RouterModule.forChild(routes)] ,
  exports: [RouterModule]
})
export class EvenementRoutingModule { }
