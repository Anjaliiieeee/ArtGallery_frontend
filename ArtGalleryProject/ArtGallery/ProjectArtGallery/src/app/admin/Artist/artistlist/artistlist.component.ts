import { Component } from '@angular/core';
import { Artist } from '../../../model/artist';
import { ArtistService } from '../../../service/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artistlist',
  templateUrl: './artistlist.component.html',
  styleUrl: './artistlist.component.css'
})
export class ArtistlistComponent {

  artists: Artist[] = [];

  constructor(private artistService: ArtistService,private router:Router) { }


  ngOnInit(): void {
    this.artistService.getallArtist().subscribe(
      data => {
        this.artists = data;
      },
      error => {
        console.error('Error fetching artworks', error);
      }
    );

  }


  deleteArtist(id: number) {
    this.artistService.deleteArtist(id).subscribe(
      response => {
        this.artists = this.artists.filter(artist => artist.artistId !== id);
      },
      error => {
        console.error('Error deleting artwork', error);
      }
    );
  }


  findArtist(id:number)
  {
          this.router.navigate(['search',id])
  }

}
