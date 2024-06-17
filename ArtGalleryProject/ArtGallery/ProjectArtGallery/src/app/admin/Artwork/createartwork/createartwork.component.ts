import { Component } from '@angular/core';
import { Artwork } from '../../../model/artwork';
import { ArtworkService } from '../../../service/artwork.service';


@Component({
  selector: 'app-createartwork',
  templateUrl: './createartwork.component.html',
  styleUrl: './createartwork.component.css'
})
export class CreateartworkComponent {
  artwork: Artwork = new Artwork();
  selectedImage: any;

  constructor(private ArtworkService:ArtworkService) { }

 
  onSubmit() {
    this.ArtworkService.createArtwork(this.artwork, this.selectedImage).subscribe(
      response => {
        console.log('Artwork created successfully:', response);
        // Clear form or perform any additional actions upon successful creation
      },
      error => {
        console.error('Error creating artwork:', error);
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0];
  }
}


  


  