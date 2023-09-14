import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './app-navigation.component.html',
  styleUrls: ['./app-navigation.component.scss']
})
export class AppNavigationComponent {
  @Output() linkClick: EventEmitter<void> = new EventEmitter<void>();

  onLinkClick(): void {
    this.linkClick.emit();
  }
}
