import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { ClientComponent } from './client/client.component';

// Component


const routes: Routes = [
  {
    path: 'owner-list',
    component: OwnerComponent
  },
  {
    path: 'client-list',
    component: ClientComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
