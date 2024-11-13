import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const API_URL = GlobalComponent.API_URL;
const RECLAMATION=GlobalComponent.RECLAMATION;
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor(private http: HttpClient) { }
  getReclamations(): Observable<any> {
    console.log( localStorage.getItem("token"));
    
    return this.http.get<any>(`${API_URL+RECLAMATION}all`);
  }
  addReclamation(ForumRequet: any) {
    return this.http.post(`${API_URL+RECLAMATION}create`,ForumRequet )
  }
  updateReclamation(ForumRequet: any) {
    return this.http.post(`${API_URL+RECLAMATION}update/idReclamation`,ForumRequet )
  }
  deleteReclamation(ID: any): Observable<any>  {
    
    return this.http.delete(`${API_URL+RECLAMATION}ID`, )
  }
 
  myReclamation():Observable<any>  {

    return this.http.get<any>(`${API_URL+RECLAMATION}myreclamation`);

  }
}
