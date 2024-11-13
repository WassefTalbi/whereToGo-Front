import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
import { Transport } from '../model/transport';
const API_URL = GlobalComponent.API_URL2;
const TRANSPORT = GlobalComponent.TRANSPORT;
@Injectable({
  providedIn: 'root',
})
export class TransportService {
  constructor(private http: HttpClient) {}
  getTransports(): Observable<any> {
    console.log(localStorage.getItem('token'));

    return this.http.get<any>(`${API_URL + TRANSPORT}`);
  }
  addTransport(transport: Transport) {
    return this.http.post(`${API_URL + TRANSPORT}`, transport);
  }
  updateTransport(transport: Transport) {
    return this.http.post(
      `${API_URL + TRANSPORT}update/idTransport`,
      transport
    );
  }
  deleteTransport(ID: any): Observable<any> {
    return this.http.delete(`${API_URL + TRANSPORT}Id`);
  }

  getTransportById(): Observable<any> {
    return this.http.get<any>(`${API_URL + TRANSPORT}myreclamation`);
  }
}
