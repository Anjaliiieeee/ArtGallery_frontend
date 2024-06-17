import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaintingComponent } from './component/painting/painting.component';
import { SculptureComponent } from './component/sculpture/sculpture.component';

import { ContactComponent } from './component/contact/contact.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';

import { RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CreateartworkComponent } from './admin/Artwork/createartwork/createartwork.component';
import { ArtworklistComponent } from './admin/Artwork/artworklist/artworklist.component';
import { SearchartworkComponent } from './admin/Artwork/searchartwork/searchartwork.component';
import { CreateartistComponent } from './admin/Artist/createartist/createartist.component';
import { ArtistlistComponent } from './admin/Artist/artistlist/artistlist.component';
import { CreatecartComponent } from './admin/Cart/createcart/createcart.component';
import { SearchartistComponent } from './admin/Artist/searchartist/searchartist.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PaintingComponent,
    SculptureComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    CreateartworkComponent,
    ArtworklistComponent,
    SearchartworkComponent,
    CreateartistComponent,
    ArtistlistComponent,
    CreatecartComponent,
    SearchartistComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
