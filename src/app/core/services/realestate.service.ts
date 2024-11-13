import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component'; 
const API_URL = GlobalComponent.API_URL;
const ETABLISSEMENT=GlobalComponent.ETABLISSEMENT;
@Injectable({
  providedIn: 'root'
})
export class RealestateService {
  

  constructor(private http: HttpClient) {}
  saveProperty(property: FormData): Observable<any> {
    return this.http.post(`${API_URL+ETABLISSEMENT}add`, property);
  }

  getAllProperties(): Observable<any> {
    return this.http.get(`${API_URL+ETABLISSEMENT}all`);
  }
  getAllPropertiesByAgency(): Observable<any> {
    return this.http.get(`${API_URL+ETABLISSEMENT}owner`);
  }

  getPropertyById(id: number): Observable<any> {
    return this.http.get(`${API_URL+ETABLISSEMENT}findById/${id}`);
  }

  updateProperty(id: number, property: FormData): Observable<any> {
    return this.http.put(`${API_URL+ETABLISSEMENT}update/${id}`, property);
  }

  deleteProperty(id: number): Observable<any> {
    return this.http.delete(`${API_URL+ETABLISSEMENT}delete/${id}`);
  }

}
