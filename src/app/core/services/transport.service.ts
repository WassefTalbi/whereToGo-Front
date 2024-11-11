import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const API_URL = GlobalComponent.API_URL;
const TRANSPORT = GlobalComponent.TRANSPORT;
@Injectable({
  providedIn: 'root',
})
export class TransportService {
  constructor(private http: HttpClient) {}
  getReclamations(): Observable<any> {
    console.log(localStorage.getItem('token'));

    return this.http.get<any>(`${API_URL + TRANSPORT}/all`);
  }
  addReclamation(ForumRequet: any) {
    return this.http.post(`${API_URL + TRANSPORT}create`, ForumRequet);
  }
  updateReclamation(ForumRequet: any) {
    return this.http.post(
      `${API_URL + TRANSPORT}update/idTransport`,
      ForumRequet
    );
  }
  deleteReclamation(ID: any): Observable<any> {
    return this.http.delete(`${API_URL + TRANSPORT}Id`);
  }

  myReclamation(): Observable<any> {
    return this.http.get<any>(`${API_URL + TRANSPORT}myreclamation`);
  }
}
