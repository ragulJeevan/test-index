import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Add this line
import { IndexedDbService } from './indexed-db.service'; // Add this line

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component'; // Add this line

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent // Add this line
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add this line
    AppRoutingModule
  ],
  providers: [IndexedDbService], // Add IndexedDbService as a provider
  bootstrap: [AppComponent]
})
export class AppModule { }
