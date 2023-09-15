import { Component, } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/public_api';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DocumentsService, Document } from '../services/documents.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})

export class AddDocumentComponent {
  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage | undefined;
  documentName: string = '';

  constructor(
    private router: Router,
    private documentsService: DocumentsService
  ) {};

  handleImageCapture(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.saveImage();
  }

  captureImage(): void {
    this.trigger.next();
  }

  saveImage(): void {
    if (this.webcamImage) {
      const newDocument: Document = {
        image: this.webcamImage.imageAsDataUrl,
        thumbImage: this.webcamImage.imageAsDataUrl,
        alt: this.documentName,
        title: this.documentName
      }
      this.documentsService.addDocument(newDocument);
      this.router.navigate(['/documents']);
    }
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}