import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  private documents: Document[] = [];

  getDocuments(): Document[] {
    return this.documents;
  }

  addDocument(document: Document): void {
    this.documents.push(document);
  }
}

export interface Document {
  image: string,
  thumbImage: string,
  alt: string,
  title: string
}