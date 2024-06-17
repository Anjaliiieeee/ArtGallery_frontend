import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Artwork } from '../model/artwork';

@Injectable({
  providedIn: 'root'
})
export class ArtworkDataService {
  private submittedArtworkSubject: BehaviorSubject<Artwork> = new BehaviorSubject<Artwork>(null);
  submittedArtwork$: Observable<Artwork> = this.submittedArtworkSubject.asObservable();

  constructor() { }

  setSubmittedArtwork(artwork: Artwork) {
    this.submittedArtworkSubject.next(artwork);
  }
}
