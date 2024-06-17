import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectArtGallery';
  isLoggedIn: boolean = false;
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    // Perform login authentication, for example, calling a service
    // If login is successful, set isLoggedIn to true
    // If login fails, display an error message
    if (this.username === 'gayatri' && this.password === '123456') {
      this.isLoggedIn = true;
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

}
