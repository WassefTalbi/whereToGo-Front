
import { DecimalPipe } from '@angular/common';
import { Component, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { selectData, selectlistData } from 'src/app/store/Invoices/invoices.selector';
import { deleteinvoice, fetchInvoiceData, fetchInvoicelistData } from 'src/app/store/Invoices/invoices.action';
import { ReclamationModule } from '../reclamation.module';
import { ReclamationService } from 'src/app/core/services/reclamation.service';
@Component({
  selector: 'app-list',
  providers: [DecimalPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  // bread crumb items
  breadCrumbItems!: Array<{}>;
  Reclamationslist: any
  Reclamation: any;
  deleteID: any;
  masterSelected!: boolean;
  invoiceCard: any;
  term: any
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;

  constructor(private reclamationService: ReclamationService ) {
  }

  ngOnInit(): void {
    /**
     * BreadCrumb
     */
    this.breadCrumbItems = [
      { label: 'Reclamation', active: true },
      { label: ' List', active: true }
    ];
    // store

    // Fetch Data
    setTimeout(() => {
      this.reclamationService.getReclamations().subscribe((data) => {
        this.Reclamation = data;
        this.Reclamationslist = data;
        this.Reclamation = this.Reclamationslist.slice(0, 10)
      });
      document.getElementById('elmLoader')?.classList.add('d-none')
    }, 1000)

  
  }

 // Sort Data
  direction: any = 'asc';
  onSort(column: any) {
    if (this.direction == 'asc') {
      this.direction = 'desc';
    } else {
      this.direction = 'asc';
    }
    const sortedArray = [...this.Reclamation]; // Create a new array
    sortedArray.sort((a, b) => {
      const res = this.compare(a[column], b[column]);
      return this.direction === 'asc' ? res : -res;
    });
    this.Reclamation = sortedArray;
  }
  compare(v1: string | number, v2: string | number) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  // filterdata
  filterdata() {
    if (this.term) {
      this.Reclamation = this.Reclamationslist.filter((el: any) => el.customer.toLowerCase().includes(this.term.toLowerCase()))
    } else {
      this.Reclamation = this.Reclamationslist
    }
    // noResultElement
    this.updateNoResultDisplay();
  }

  // no result 
  updateNoResultDisplay() {
    const noResultElement = document.querySelector('.noresult') as HTMLElement;

    if (this.term && this.Reclamation.length === 0) {
      noResultElement.style.display = 'block';
    } else {
      noResultElement.style.display = 'none';
    }
  }


  checkedValGet: any[] = [];
  // The master checkbox will check/ uncheck all items
  checkUncheckAll(ev: any) {
    this.Reclamation = this.Reclamation.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));

    var checkedVal: any[] = [];
    var result;
    for (var i = 0; i < this.Reclamation.length; i++) {
      if (this.Reclamation[i].states == true) {
        result = this.Reclamation[i].id;
        checkedVal.push(result);
      }
    }

    this.checkedValGet = checkedVal;
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }
  // Select Checkbox value Get
  onCheckboxChange(e: any) {
    var checkedVal: any[] = [];
    var result
    for (var i = 0; i < this.Reclamation.length; i++) {
      if (this.Reclamation[i].states == true) {
        result = this.Reclamation[i].id;
        checkedVal.push(result);
      }
    }
    this.checkedValGet = checkedVal
    checkedVal.length > 0 ? document.getElementById("remove-actions")?.classList.remove('d-none') : document.getElementById("remove-actions")?.classList.add('d-none');
  }

  // Delete Product
  removeItem(id: any) {
    this.deleteID = id
    this.deleteRecordModal?.show()
  }



  // Page Changed
  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.Reclamation = this.Reclamationslist
      .slice(startItem, endItem);
  } 
}

