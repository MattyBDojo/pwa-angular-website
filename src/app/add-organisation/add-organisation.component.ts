import { Component } from '@angular/core';
import { OrganisationsService, Organisation, Type } from '../services/organisations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.scss']
})
export class AddOrganisationComponent {
  types: string[] = Object.values(Type);
  organisation: Organisation = {
    name: '',
    location: '',
    type: Type.LimitedCompany,
    business: '',
    number: ''
  }

  constructor(
    private organisationsService: OrganisationsService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.organisationsService.addOrganisation(this.organisation);
    this.router.navigate(['/organisations']);
  }
}