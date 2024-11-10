import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import{ Event} from '../pages/evenement/event-list/EventListComponent'
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public getevents(): Observable<Event[]> {
    return this.httpClient.get<Event[]>('http://localhost:1924/event/getall')
      .pipe(
        catchError(this.handleError)
      );
  }
  getEventsPaged(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:1924/event/paged?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  getEvents(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:1924/event?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url);
  }
  // Autres méthodes du service

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client
      console.error('An error occurred:', error.error.message);
    } else {
      // Erreur côté serveur
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Renvoie une observable avec un message d'erreur
    return throwError('Something bad happened; please try again later.');
  }
  addEvent(e: Event) {
    return this.httpClient.post('http://localhost:1924/event/add', e);
  }
  public deleteEvent(id: number) {
    return this.httpClient.delete(`http://localhost:1924/event/delete/${id}`);
  }
  public updateEvent(id: number, e: Event){
    return this.httpClient.put(`http://localhost:1924/event/updateEvent/${id}`,e);
  }
  public retrieveEvent(id:number){
    return this.httpClient.get<Event>(`http://localhost:1924/event/getbyid/${id}`)
  }
  updateEventRating(id: number, rating: number): Observable<Event> {
    const url = `http://localhost:1924/event/updateRating/${id}?rating=${rating}`;
    return this.httpClient.put<Event>(url, {});
  }
  
}
