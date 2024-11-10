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
    return this.http.get<any>(`${API_URL+RECLAMATION}`);
  }
  addReclamation(ForumRequet: any) {
    return this.http.post(`${API_URL+RECLAMATION}create`,ForumRequet )
  }
  updateReclamation(ForumRequet: any) {
    return this.http.post(`${API_URL+RECLAMATION}update/{idReclamation}`,ForumRequet )
  }
  deleteReclamation(ID: any): Observable<any>  {
    
    return this.http.delete(`${API_URL+RECLAMATION}{Id}`, )
  }
 
  MyReclamation():Observable<any>  {

    return this.http.get<any>(`${API_URL+RECLAMATION}{idUser}`);

  }
}
