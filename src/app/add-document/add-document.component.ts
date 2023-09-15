import { Component, OnInit, HostListener } from '@angular/core';
import { WebcamImage } from 'ngx-webcam/public_api';
import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { DocumentsService, Document } from '../services/documents.service';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrls: ['./add-document.component.scss']
})

export class AddDocumentComponent implements OnInit {
  trigger: Subject<void> = new Subject<void>();
  webcamImage: WebcamImage | undefined;
  documentName: string = '';
  webcamHeight: number = 500;
  webcamWidth: number = 500;

  constructor(
    private router: Router,
    private documentsService: DocumentsService
  ) {};

  ngOnInit(): void {
    this.updateWebcamDimensions();
  }

  private updateWebcamDimensions(): void {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
      this.webcamHeight = 300;
      this.webcamWidth = 300;
    } else {
      this.webcamHeight = 500;
      this.webcamWidth = 500;
    }
  }

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

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateWebcamDimensions();
  }
}