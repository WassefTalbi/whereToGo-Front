import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EtablissementUpdateComponent } from './etablissement-update/etablissement-update.component';
import { EtablissementAddComponent } from './etablissement-add/etablissement-add.component';
const routes: Routes = [
  

  { path: 'add', component: EtablissementAddComponent },
  { path: 'update', component: EtablissementUpdateComponent },
  { path: 'list', component: EtablissementAddComponent },



];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class EtablissementRoutingModule { }
