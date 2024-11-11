import { DecimalPipe } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { ReclamationService } from 'src/app/core/services/reclamation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
declare const bootstrap: any; // Declare Bootstrap for modal functionality

@Component({
  selector: 'app-my-reclamtions',
  providers: [DecimalPipe],
  templateUrl: './my-reclamtions.component.html',
  styleUrls: ['./my-reclamtions.component.scss']
})

export class MyReclamtionsComponent {
  breadCrumbItems!: Array<{}>;
  MyReclamationslist: any = [];
  Reclamation: any = [];
  deleteID: any;
  masterSelected: boolean = false;
  term: any = '';
  reclamationForm: FormGroup;
  isLoading: boolean = false;

  
  @ViewChild('showModal', { static: false }) showModal?: ModalDirective;
  @ViewChild('deleteRecordModal', { static: false }) deleteRecordModal?: ModalDirective;

  constructor(
    private fb: FormBuilder,
    private reclamationService: ReclamationService
  ) {
    this.reclamationForm = this.fb.group({
      titre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)
        ]
      ],
      description: [
        '',
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(255) // Adjust as necessary
        ]
      ]
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Reclamation', active: true },
      { label: 'My-reclamation', active: true }
    ];

    this.loadReclamations();
  }

  loadReclamations(): void {
    this.isLoading = true;
    this.reclamationService.myReclamation().subscribe((data) => {
      this.MyReclamationslist = data;
      this.Reclamation = this.MyReclamationslist.slice(0, 10);
      this.isLoading = false;
    });
  }

  direction: any = 'asc';
  onSort(column: string): void {
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
    const sortedArray = [...this.Reclamation];
    sortedArray.sort((a, b) => this.compare(a[column], b[column]));
    this.Reclamation = this.direction === 'asc' ? sortedArray : sortedArray.reverse();
  }

  compare(v1: string | number, v2: string | number): number {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
  }

  filterdata(): void {
    if (this.term) {
      this.Reclamation = this.MyReclamationslist.filter((el: any) =>
        el.titre.toLowerCase().includes(this.term.toLowerCase()) ||
        el.description.toLowerCase().includes(this.term.toLowerCase())
      );
    } else {
      this.Reclamation = this.MyReclamationslist;
    }
    this.updateNoResultDisplay();
  }

  updateNoResultDisplay(): void {
    const noResultElement = document.querySelector('.noresult') as HTMLElement;
    noResultElement.style.display = this.term && this.Reclamation.length === 0 ? 'block' : 'none';
  }

  checkUncheckAll(ev: any): void {
    this.Reclamation = this.Reclamation.map((x: { states: any }) => ({ ...x, states: ev.target.checked }));
    this.updateCheckedValues();
  }

  onCheckboxChange(): void {
    this.updateCheckedValues();
  }

  updateCheckedValues(): void {
    const checkedVal = this.Reclamation.filter((item: any) => item.states).map((item: any) => item.id);
    this.deleteID = checkedVal;
    document.getElementById("remove-actions")?.classList.toggle('d-none', checkedVal.length === 0);
  }

  removeItem(id: number): void {
    this.reclamationService.deleteReclamation(id).subscribe(() => {
      this.Reclamation = this.Reclamation.filter((item: any) => item.id !== id);
      console.log('Reclamation deleted successfully');
    });
  }

  pageChanged(event: any): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.Reclamation = this.MyReclamationslist.slice(startItem, endItem);
  }

  openAddReclamationModal(): void {
    if (this.showModal) {
      const modal = new bootstrap.Modal(this.showModal);
      modal.show();
    }
  }

  saveReclamation(): void {
    if (this.reclamationForm.valid) {
      if (this.reclamationForm.get('id')?.value) {
        const updatedData = { ...this.reclamationForm.value };
        this.reclamationService.updateReclamation(updatedData).subscribe(
          () => {
            console.log('Reclamation updated successfully');
            this.reclamationForm.reset();
            this.closeModal();
          },
          (error) => console.error('Error updating reclamation', error)
        );
      } else {
        const newData = { ...this.reclamationForm.value };
        this.reclamationService.addReclamation(newData).subscribe(
          () => {
            console.log('Reclamation added successfully');
            this.reclamationForm.reset();
            this.closeModal();
          },
          (error) => console.error('Error adding reclamation', error)
        );
      }
    }
  }
  get titre() {
    return this.reclamationForm.get('titre');
  }

  get description() {
    return this.reclamationForm.get('description');
  }
  closeModal(): void {
    if (this.showModal) {
      const modal = new bootstrap.Modal(this.showModal);
      modal.hide();
    }
  }
}
