import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const API_URL = GlobalComponent.API_URL;
const USER=GlobalComponent.user;

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  constructor(private http: HttpClient) {}

  saveRestaurant(agency: FormData): Observable<any> {
    return this.http.post(`${API_URL+USER}register-agency`, agency);
  }

  getAllRestaurant(): Observable<any> {
    return this.http.get(`${API_URL+USER}all-agency`);
  }

  getRestaurantById(id: number): Observable<any> {
    return this.http.get(`${API_URL+USER}findById/${id}`);
  }

  updateRestaurant(id: number, agency: FormData): Observable<any> {
    return this.http.put(`${API_URL+USER}manage-agence/${id}`, agency);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${API_URL+USER}delete/${id}`);
  }
}
