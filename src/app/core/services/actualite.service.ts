import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalComponent } from 'src/app/global-component';
const API_URL = GlobalComponent.API_URL;
const POST=GlobalComponent.POST;
const COMMENT=GlobalComponent.COMMENT;

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  constructor(private http: HttpClient) { }
  getAllPost(): Observable<any> {
    console.log( localStorage.getItem("token"));
    
    return this.http.get<any>(`${API_URL+POST}getPosts`);
  }
  updatePost(ForumRequet: any) {
    return this.http.post(`${API_URL+POST}updatePost/{id}`,ForumRequet )
  }
  addPost(ForumRequet: any) {
    return this.http.post(`${API_URL+POST}addPost`,ForumRequet )
  }
 
  deletePost(ID: any): Observable<any>  {
    
    return this.http.delete(`${API_URL+POST}deletePost/{id}`, )
  }
 
 
}
