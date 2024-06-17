import { Component } from '@angular/core';
import { Artist } from '../../../model/artist';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistService } from '../../../service/artist.service';

@Component({
  selector: 'app-searchartist',
  templateUrl: './searchartist.component.html',
  styleUrl: './searchartist.component.css'
})
export class SearchartistComponent {

  artist:Artist=new Artist();

  artistId:number=0;

  constructor(private route:ActivatedRoute,private service:ArtistService,private router:Router){}
  ngOnInit()
  {
    this.artist=new Artist()  ;
    this.artistId=this.route.snapshot.params['artistId'];

    this.service.searchArtist(this.artistId).subscribe((data)=>{

      this.artist=data;


    })
  }

}
