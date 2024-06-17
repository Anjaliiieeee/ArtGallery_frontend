import { Component } from '@angular/core';
import { Artwork } from '../../model/artwork';
import { ArtworkService } from '../../service/artwork.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.css'
})
export class PaintingComponent {
  artworks: Artwork[] = [];

  constructor(private artworkService: ArtworkService) { }

  ngOnInit() {
      this.fetchArtworks();
  }

  fetchArtworks() {
      this.artworkService.getAllArtworks().subscribe(
          (artworks: Artwork[]) => {
              this.artworks = artworks;
          },
          error => {
              console.error('Error fetching artworks:', error);
          }
      );
  }

  buyNow(artwork: Artwork) {
      // Implement buy now functionality here
      console.log('Buy Now clicked for artwork:', artwork);
  }

  addToCart(artwork: Artwork) {
      // Implement add to cart functionality here
      console.log('Add to Cart clicked for artwork:', artwork);
  }
}
