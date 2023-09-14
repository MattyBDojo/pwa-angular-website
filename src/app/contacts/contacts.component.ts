import { Component, OnInit } from '@angular/core';
import { ContactsService, Contact } from '../services/contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(
    private contactsService: ContactsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }

  addContact(): void {
    this.router.navigate(['/add-contact']);
  }
}
