import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl="http://localhost:8080";


  constructor(private http:HttpClient) { }
  createcart(cart:Object):Observable<Object>
 {
    return this.http.post(`${this.baseUrl}/addCart`,cart);
  }

}
