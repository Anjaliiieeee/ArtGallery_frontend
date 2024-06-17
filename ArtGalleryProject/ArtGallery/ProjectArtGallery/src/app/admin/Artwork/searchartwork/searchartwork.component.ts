import { Component } from '@angular/core';
import { Artwork } from '../../../model/artwork';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtworkService } from '../../../service/artwork.service';

@Component({
  selector: 'app-searchartwork',
  templateUrl: './searchartwork.component.html',
  styleUrl: './searchartwork.component.css'
})
export class SearchartworkComponent {

  artwork:Artwork=new Artwork();

  artworkId:number=0;

  constructor(private route:ActivatedRoute,private service:ArtworkService,private router:Router){}
  ngOnInit()
  {
    this.artwork=new Artwork()  ;
    this.artworkId=this.route.snapshot.params['artworkId'];

    this.service.searchArtwork(this.artworkId).subscribe((data)=>{

      this.artwork=data;


    })
  }


}
