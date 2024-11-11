import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffichageComponent } from './affichage/affichage.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {
    path: 'afficher',
    component: AffichageComponent
  },
  {
    path: 'ajout-actualite',
    component: AjoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualiteRoutingModule { }
