import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportComponent } from './transport.component';
import { TransportAddComponent } from './transport-add/transport-add.component';

const routes: Routes = [
  {path: '', component: TransportComponent},
  {path: 'add', component: TransportAddComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportRoutingModule { }
