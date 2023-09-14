import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {

  private organisations: Organisation[] = [];

  getOrganisations(): Organisation[] {
    return this.organisations;
  }

  addOrganisation(organisation: Organisation): void {
    this.organisations.push(organisation);
  }
}

export enum Type {
  SoleTrader = 'Sole trader',
  LimitedCompany = 'Limited company',
}

export interface Organisation {
  name: string;
  location: String;
  type: Type;
  business: String;
  number: String;
}