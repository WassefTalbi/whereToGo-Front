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
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})


export class EventListComponent {
    event!: Event
    eventList: Event[] = [];
    currentPage: number = 1;
    totalEvents: number = 0;
    pageSize: number = 3;
    totalPages: number = 0;
    pages: number[] = [];
    constructor(public _router: Router, public eventservice: EventService) {
       
    }

    ngOnInit(): void {
        this.getEvents();
      }
    
      getEvents(): void {
        this.eventservice.getEventsPaged(this.currentPage, this.pageSize)
          .subscribe(response => {
            this.eventList = response.content; // Utilisez response.content pour obtenir la liste des événements
            this.totalEvents = response.totalElements;
            this.totalPages = response.totalPages;
            this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
          });
      }
      onPageChange(page: number): void {
        this.currentPage = page;
        this.getEvents();
      }
      generateStarRatingArray(rating: number): string[] {
        const starArray: string[] = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        for (let i = 0; i < fullStars; i++) {
          starArray.push('fas fa-star');
        }
        if (hasHalfStar) {
          starArray.push('fas fa-star-half-alt');
        }
        const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        for (let i = 0; i < remainingStars; i++) {
          starArray.push('far fa-star');
        }
        return starArray;
      }
      deleteEvent(id: number): void {
        console.log(`delete Event ${id}`);
        this.eventservice.deleteEvent(id).subscribe(
          response => {
            console.log(response);
            // Rafraîchir la liste des événements après la suppression
            this.getEvents();
          },
          error => {
            console.error('Erreur lors de la suppression du fournisseur', error);
          }
        );
        window.location.reload();
    
      }
    
      prevPage(): void {
        if (this.currentPage > 1) {
          this.currentPage--;
          this.getEvents();
        }
      }
    
      nextPage(): void {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
          this.getEvents();
        }
      }
    
      goToPage(page: number): void {
        if (page >= 1 && page <= this.totalPages) {
          this.currentPage = page;
          this.getEvents();
        }
      }
    
      addEvent(): void {
        this._router.navigate(['Evenement/add'])
      }
    
      updatevent(id: number): void {
        this._router.navigate(['Evenement/update', id])
      }
}
