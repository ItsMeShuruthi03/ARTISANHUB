import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'http://localhost:1310/api/art/home'; 
  constructor(private http: HttpClient) { }

  getHomePageData(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
