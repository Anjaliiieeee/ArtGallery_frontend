import { Component } from '@angular/core';
import { Artist } from '../../../model/artist';
import { ArtistService } from '../../../service/artist.service';

@Component({
  selector: 'app-createartist',
  templateUrl: './createartist.component.html',
  styleUrl: './createartist.component.css'
})
export class CreateartistComponent {
  artist: Artist = new Artist();
  selectedImage: File | null = null;

  constructor(private artistService: ArtistService) { }

  onSubmit(): void {
    if (!this.selectedImage) {
      console.error('No image selected.');
      return;
    }
    
    const formData = new FormData();
    formData.append('artistName', this.artist.artistName);
    formData.append('artistBio', this.artist.artistBio);
    formData.append('image', this.selectedImage);

    this.artistService.createArtist(formData).subscribe(
      (response: any) => {
        console.log('Artist created successfully:', response);
        // Optionally, you can navigate to the artist list page or perform any other action upon successful creation
      },
      (error: any) => {
        console.error('Error creating artist:', error);
      }
    );
  }

  onFileSelected(event: any): void {
    this.selectedImage = event.target.files[0];
  }

}
