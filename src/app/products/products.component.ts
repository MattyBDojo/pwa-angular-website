import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  stageOneItems: string[] = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
  stageTwoItems: string[] = ['Product 5', 'Product 6'];
  stageThreeItems: string[] = ['Product 7'];

  onDrop(event: CdkDragDrop<string[]>): void {
    console.log('rara')
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      )
    }
  }
}

