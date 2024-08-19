import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item-list/item/item.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
