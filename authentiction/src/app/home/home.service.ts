import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../core/typings/response';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  http = inject(HttpClient);
  authService = inject(AuthService)

  getBooks(): Observable<Response> {
    return this.http.get<Response>("http://localhost:3000/api/book")

  }

}
