import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Route
import { ReclamationRoutingModule } from './reclamation-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

// Count To
import { CountUpModule } from 'ngx-countup';

// Mask
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

// Bootstrap Component
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

// Component

import { ListComponent } from './list/list.component';
import { MyReclamtionsComponent } from './my-reclamtions/my-reclamtions.component';


@NgModule({
  declarations: [
    MyReclamtionsComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ReclamationRoutingModule,
    SharedModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CountUpModule,
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ]
})

export class ReclamationModule { }
