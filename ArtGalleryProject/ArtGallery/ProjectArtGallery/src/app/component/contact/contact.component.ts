import { Component } from '@angular/core';
import { ContactService } from '../../service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private contactService: ContactService) { }

  onSubmit() {
    this.contactService.sendContact(this.contact).subscribe(response => {
      console.log('Contact form submitted', response);
      // Reset form
      this.contact = {
        name: '',
        email: '',
        message: ''
      };
    });
  }

}