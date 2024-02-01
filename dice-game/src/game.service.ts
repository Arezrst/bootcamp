import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  http = inject(HttpClient);

  getGamers(First: string, Second: string): Observable<any> {
    var data = {
      First: First,
      Second: Second,
    };

    return this.http.post('http://localhost:4000', data, {
      headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
    });
  }
  getNameOfGamers(): Observable<any> {
    return this.http.get('http://localhost:4000/');
  }
}