import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { MyReclamtionsComponent } from './my-reclamtions/my-reclamtions.component';

// Component


const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'my-reclamations',
    component: MyReclamtionsComponent
  },

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationRoutingModule { }
