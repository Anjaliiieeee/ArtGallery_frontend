import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  
  baseUrl="http://localhost:8080";
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.baseUrl, { username, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            return true;
          }
          return false;
        })
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

}
