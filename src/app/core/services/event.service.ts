import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const API_URL = GlobalComponent.API_URL;
const EVENEMENT=GlobalComponent.EVENEMENT;
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public getevents(): Observable<Event[]> {
    return this.httpClient.get<any>(`${API_URL+EVENEMENT}/getall`);
  
  }
  getEventsPaged(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:1924/evenement/paged?page=${page}&pageSize=${pageSize}`;
    return this.httpClient.get<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  
  getEvents(page: number, pageSize: number): Observable<any> {
    const url = `http://localhost:1924/evenement?page=${page}&pageSize=${pageSize}`;
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
  addEvent(e: any) {
    return this.httpClient.post('http://localhost:1924/evenement/add', e);
  }
  public deleteEvent(id: number) {
    return this.httpClient.delete(`http://localhost:1924/evenement/delete/${id}`);
  }
  public updateEvent(id: number, e: Event){
    return this.httpClient.put(`http://localhost:1924/evenement/updateEvent/${id}`,e);
  }
  public retrieveEvent(id:number){
    return this.httpClient.get<Event>(`http://localhost:1924/evenement/getbyid/${id}`)
  }
  updateEventRating(id: number, rating: number): Observable<Event> {
    const url = `http://localhost:1924/evenement/updateRating/${id}?rating=${rating}`;
    return this.httpClient.put<Event>(url, {});
  }
  
}
