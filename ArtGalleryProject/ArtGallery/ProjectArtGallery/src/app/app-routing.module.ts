import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';


import { ContactComponent } from './component/contact/contact.component';
import { PaintingComponent } from './component/painting/painting.component';
import { AboutComponent } from './component/about/about.component';
import { SculptureComponent } from './component/sculpture/sculpture.component';
import { ArtistComponent } from './component/artist/artist.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { CreateartworkComponent } from './admin/Artwork/createartwork/createartwork.component';
import { ArtworklistComponent } from './admin/Artwork/artworklist/artworklist.component';
import { CreateartistComponent } from './admin/Artist/createartist/createartist.component';
import { ArtistlistComponent } from './admin/Artist/artistlist/artistlist.component';
import { CreatecartComponent } from './admin/Cart/createcart/createcart.component';
import { SearchartworkComponent } from './admin/Artwork/searchartwork/searchartwork.component';
import { SearchartistComponent } from './admin/Artist/searchartist/searchartist.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
 
   {path: 'about',component:AboutComponent},
   {path: 'contact',component:ContactComponent},
   {path: 'painting',component:PaintingComponent},
   {path: 'sculpture',component:SculptureComponent},
   {path: 'artist',component:ArtistComponent},
   { path: 'admin/login', component: LoginComponent },
   { path: 'admin/dashboard', component: DashboardComponent },
   {
    path:'add',
    component:CreateartworkComponent
   },
   {
    path:'list',
    component:ArtworklistComponent
   },
   {
    path:'search/:artworkId',
    component:SearchartworkComponent
  },
     {                     
      path: 'addArtist',      
      component:CreateartistComponent  
     }  ,
     {                     
      path: 'listArtist',      
      component:ArtistlistComponent  
     }  ,
     {
      path:'search/:artistId',
      component:SearchartistComponent
    },

     {                     
      path: 'addCart',      
      component: CreatecartComponent 
     }  ,


   {path: '**',redirectTo:'',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
