import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artwork } from '../model/artwork';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtworkService {

  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  createArtwork(artwork: Artwork, image: File): Observable<Artwork> {
    const formData: FormData = new FormData();
    formData.append('artworkTitle', artwork.artworkTitle);
    formData.append('price', artwork.price.toString());
    formData.append('year', artwork.year.toString());
    formData.append('image', image);

    return this.http.post<Artwork>(`${this.baseUrl}/addArtwork`, formData);
  }

  getAllArtworks(): Observable<Artwork[]> {
    return this.http.get<Artwork[]>(`${this.baseUrl}/getAllArtworks`);
  }

  deleteArtwork(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteArtwork/${id}`,{responseType:'text'});
  }

  searchArtwork(id:number):Observable<any>
  {
    console.log("INside service")
    console.log(typeof(id));
    return this.http.get(`${this.baseUrl}/getbyartworkid/${id}`);
  }
}
