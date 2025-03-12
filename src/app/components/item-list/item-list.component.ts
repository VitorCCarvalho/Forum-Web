import { Component, Input } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Item } from './item.model';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [CommonModule, RouterLink, NgClass],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  @Input() items: Item[] = [];
  @Input() title: string = 'Items';
  @Input() emptyMessage: string = 'No items to display';
  @Input() showAdditionalInfo: boolean = true;
  @Input() loading: boolean = false;
  
  // Method to truncate text to a maximum of 3 lines (approx. 300 characters)
  truncateText(text: string): string {
    const maxLength = 300;
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  }
}
