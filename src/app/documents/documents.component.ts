import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentsService, Document } from '../services/documents.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent {
  public documents: Document[]= [];

  constructor(
    private documentsService: DocumentsService,
    private router: Router
  ) {
    this.documents = this.documentsService.getDocuments();
  };

  addDocument(): void {
    this.router.navigate(['/add-document']);
  }
}
