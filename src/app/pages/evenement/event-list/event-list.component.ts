import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/core/services/event.service';
export class Event{
  constructor(
  public idEvent:number,
  public address:string,
  public description:string,
  public eventDate:Date,
  public name:string,
  public nbPlace:number,
  public image:string,
  public price:number,
  public hour: string,
  public  rating:number

  ){}
}
@Component({
  selector: 'app-event-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})


export class EventListComponent {
  events: string[] = []; // Tableau pour stocker les événements
    currentPage: number = 1; // Page actuelle
    itemsPerPage: number = 5; // Nombre d'éléments par page

    constructor() {
        // Initialisation des événements
        this.events = [
            'Événement 1',
            'Événement 2',
            'Événement 3',
            'Événement 4',
            'Événement 5',
            'Événement 6',
            'Événement 7',
            'Événement 8',
            'Événement 9',
            'Événement 10'
        ];
    }

    addEvent(): void {
        const newEvent = prompt('Entrez le nom de l\'événement :');
        if (newEvent) {
            this.events.push(newEvent);
            console.log('Nouvel événement ajouté :', newEvent);
        }
    }

    get paginatedEvents(): string[] {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        return this.events.slice(startIndex, startIndex + this.itemsPerPage);
    }

    nextPage(): void {
        if (this.currentPage * this.itemsPerPage < this.events.length) {
            this.currentPage++;
        }
    }

    previousPage(): void {
        if (this.currentPage > 1) {
            this.currentPage--;
        }
    }

    resetPagination(): void {
        this.currentPage = 1;
    }
 
}
