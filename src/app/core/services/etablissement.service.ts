// services/etablissement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private apiUrl = 'http://localhost:8080/api/etablissements';

  constructor(private http: HttpClient) {}
  getEtablissements(): Observable<Etablissement[]> {
    return this.http.get<Etablissement[]>(this.apiUrl);
  }
}
