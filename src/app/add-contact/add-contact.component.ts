import { Component } from '@angular/core';
import { ContactsService, Contact } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent {
  contact: Contact = {
    name: '',
    email: ''
  }

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.contactsService.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
