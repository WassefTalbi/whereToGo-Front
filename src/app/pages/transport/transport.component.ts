import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransportService } from 'src/app/core/services/transport.service';
import { ModalDirective } from 'ngx-bootstrap/modal';

interface Transport {
  id: number;
  vehicleNumber: string;
  driverName: string;
  type: string;
  capacity: number;
  userId?: number;
  reclamationId?: number;
  evenementId?: number;
  createdDate: string;
  lastModifiedDate: string;
  version: number;
  deleted: boolean;
}

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class TransportComponent implements OnInit {
  transports: Transport[] = [];
  paginatedTransports: Transport[] = [];
  sortDirection: { [key: string]: boolean } = {};
  direction: string = 'asc';
  sortKey: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 7;

  constructor(
    private transportService: TransportService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTransports();
  }
  navigateToAdd(): void {
    this.router.navigate(['/transport/add']);
  }

  loadTransports(): void {
    this.transportService.getTransports().subscribe(
      (transport) => {
        this.transports = transport;
        this.updatePaginatedTransports();
        console.log('Transports loaded:', this.transports);
      },
      (error) => {
        console.error('Error loading transports:', error);
      }
    );
  }

  updatePaginatedTransports(): void {
    const startItem = (this.currentPage - 1) * this.itemsPerPage;
    const endItem = this.currentPage * this.itemsPerPage;
    this.paginatedTransports = this.transports.slice(startItem, endItem);
  }

  deletedata(id: number) {
    this.transportService.deleteTransport(id).subscribe(() => {
      this.loadTransports();
    });
  }

  onRejectClick(id: number): void {
    console.log(`Reject button clicked for ID: ${id}`);
    this.deletedata(id);
  }

  openDetail(transport: Transport): void {
    console.log(
      `View button clicked for transport: ${transport.vehicleNumber}`
    );
    // Implement the logic to view transport details
  }

  editTransport(transport: Transport): void {
    console.log(
      `Edit button clicked for transport: ${transport.vehicleNumber}`
    );
    // Implement the logic to edit transport details
  }

  deleteTransport(id: number): void {
    console.log(`Delete button clicked for ID: ${id}`);
    this.deletedata(id);
  }

  pageChanged(event: any): void {
    this.currentPage = event.page;
    this.updatePaginatedTransports();
  }
}
