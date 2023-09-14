import { Component, OnInit } from '@angular/core';
import { OrganisationsService, Organisation } from '../services/organisations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organisations',
  templateUrl: './organisations.component.html',
  styleUrls: ['./organisations.component.scss']
})
export class OrganisationsComponent implements OnInit {
  organisations: Organisation[] = [];

  constructor(
    private organisationsService: OrganisationsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.organisations = this.organisationsService.getOrganisations();
  }

  addOrganisation(): void {
    this.router.navigate(['/add-organisation']);
  }
}
