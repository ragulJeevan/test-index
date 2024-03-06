import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  items: any[] = [];
  newItem: any = {};
  selectedItem: any = {};

  constructor(private indexedDbService: IndexedDbService) { }

  ngOnInit(): void {
    // Fetch items from IndexedDB when component initializes
    this.fetchItems();
  }

  // Fetch all items from IndexedDB
  fetchItems() {
    this.indexedDbService.getAllItems().then((items: any[]) => {
      this.items = items;
    });
  }

  // Add new item to IndexedDB
  addItem() {
    this.indexedDbService.addItem(this.newItem).then(() => {
      // Clear newItem object and fetch updated items
      this.newItem = {};
      this.fetchItems();
    });
  }

  // Select item for editing
  selectItem(item: any) {
    this.selectedItem = { ...item };
  }

  // Update item in IndexedDB
  updateItem() {
    this.indexedDbService.updateItem(this.selectedItem.id, this.selectedItem).then(() => {
      // Clear selectedItem object and fetch updated items
      this.selectedItem = {};
      this.fetchItems();
    });
  }

  // Delete item from IndexedDB
  deleteItem(id: number) {
    this.indexedDbService.deleteItem(id).then(() => {
      // Fetch updated items
      this.fetchItems();
    });
  }
}
