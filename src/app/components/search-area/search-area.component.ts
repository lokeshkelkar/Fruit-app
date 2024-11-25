// search-area.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-area',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-area.component.html',
  styleUrls: ['./search-area.component.css']
})
export class SearchAreaComponent {
  searchQuery: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();

  onClose() {
    this.close.emit();
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      this.search.emit(this.searchQuery);
    }
  }
}