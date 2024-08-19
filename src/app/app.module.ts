import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item-list/item/item.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { Todo2Component } from './todo2/todo2.component';

const appRoutes: Routes = [
  { path: 'home', component: ItemListComponent},
  { path: 'todo2', component: Todo2Component},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    TopMenuComponent,
    Todo2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
