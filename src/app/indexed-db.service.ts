// Import necessary modules
import { Injectable } from '@angular/core';
import Dexie from 'dexie';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private db: any;

  constructor() {
    // Create IndexedDB instance
    this.createDb();
  }

  // Create database and define schema
  private createDb() {
    this.db = new Dexie('myDatabase');
    this.db.version(1).stores({
      items: '++id,name,description'
    });
  }

  // Add item to the database
  addItem(item: any) {
    return this.db.items.add(item);
  }

  // Get item by ID from the database
  getItem(id: number) {
    return this.db.items.get(id);
  }

  // Update item in the database
  updateItem(id: number, updatedItem: any) {
    return this.db.items.update(id, updatedItem);
  }

  // Delete item from the database
  deleteItem(id: number) {
    return this.db.items.delete(id);
  }

  // Get all items from the database
  getAllItems() {
    return this.db.items.toArray();
  }
}
