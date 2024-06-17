import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../model/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseUrl = 'http://localhost:8080';


  constructor(private http: HttpClient) { }

  createArtist(artistData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/addArtist`, artistData);
  }
  getallArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseUrl}/getallArtist`);
  }
 
  deleteArtist(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteArtist/${id}`,{responseType:'text'});
  }

  searchArtist(id:number):Observable<any>
  {
    console.log("INside service")
    console.log(typeof(id));
    return this.http.get(`${this.baseUrl}/getArtistById/${id}`);
  }
}
