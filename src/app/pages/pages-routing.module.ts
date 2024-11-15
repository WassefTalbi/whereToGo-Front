import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule)
  },
  { path: 'transport', loadChildren: () => import('./transport/transport.module').then(m => m.TransportModule) },
  {
    path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule)
  },
  {
    path: 'Etablissement', loadChildren: () => import('./Etablissement/etablissement.module').then(m => m.EtablissementModule)
  },
  {
    path: 'learning', loadChildren: () => import('./learning/learning.module').then(m => m.LearningModule)
  },
  
  { path: 'Evenement',loadChildren: () => import('./evenement/evenement.module').then(m => m.EvenementModule) },


  {
    path: 'invoices', loadChildren: () => import('./invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'advance-ui', loadChildren: () => import('./advanceui/advanceui.module').then(m => m.AdvanceuiModule)
  },
  {
    path: 'maps', loadChildren: () => import('./maps/maps.module').then(m => m.MapsModule)
  },
  {
    path: 'tickets', loadChildren: () => import('./tickets/tickets.module').then(m => m.TicketsModule)
  },
  {
    path: 'real-estate', loadChildren: () => import('./real-estate/real-estate.module').then(m => m.RealEstateModule)
  },
  {
    path: 'icons', loadChildren: () => import('./icons/icons.module').then(m => m.IconsModule)
  },
  {
    path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule)
  },
  {
    path: 'tables', loadChildren: () => import('./table/table.module').then(m => m.TableModule)
  },
  {
    path: 'forms', loadChildren: () => import('./forms/forms.module').then(m => m.FormModule)
  },
  {
    path: 'custom-ui', loadChildren: () => import('./custom-ui/custom-ui.module').then(m => m.CustomUiModule)
  },
  {
    path: 'pages', loadChildren: () => import('./extrapages/extrapages.module').then(m => m.ExtrapagesModule)
  },
  {
    path: 'model', loadChildren: () => import('./model/model.module').then(m => m.ModelModule)
  },

  {
    path: 'reclamation', loadChildren: () => import('./reclamation/reclamation.module').then(m => m.ReclamationModule)

  },
   {

    path: 'actualite', loadChildren: () => import('./actualite/actualite.module').then(m => m.ActualiteModule)


  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)


  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
