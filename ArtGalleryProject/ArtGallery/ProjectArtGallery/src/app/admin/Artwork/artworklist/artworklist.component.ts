import { Component } from '@angular/core';
import { Artwork } from '../../../model/artwork';
import { ArtworkService } from '../../../service/artwork.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artworklist',
  templateUrl: './artworklist.component.html',
  styleUrl: './artworklist.component.css'
})
export class ArtworklistComponent {

  artworks: Artwork[] = [];

  constructor(private artworkService: ArtworkService,private router:Router) { }


  ngOnInit(): void {
    this.artworkService.getAllArtworks().subscribe(
      data => {
        this.artworks = data;
      },
      error => {
        console.error('Error fetching artworks', error);
      }
    );
  }

  deleteArtwork(id: number) {
    this.artworkService.deleteArtwork(id).subscribe(
      response => {
        this.artworks = this.artworks.filter(artwork => artwork.artworkId !== id);
      },
      error => {
        console.error('Error deleting artwork', error);
      }
    );
  }

  findArtwork(id:number)
  {
          this.router.navigate(['search',id])
  }


}
