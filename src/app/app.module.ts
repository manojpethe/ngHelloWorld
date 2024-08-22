import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ItemComponent } from './item-list/item/item.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { Todo2Component } from './todo2/todo2.component';
import { HomeComponent } from './home/home.component';
import { Todo3Component } from './todo3/todo3.component';
import { ShowTodoItemComponent } from './todo3/show-todo-item/show-todo-item.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'todo2', component: ItemListComponent},
  { path: 'todo3', component: Todo3Component},
  { path: '**', redirectTo: '/home'},
];

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    TopMenuComponent,
    Todo2Component,
    HomeComponent,
    Todo3Component,
    ShowTodoItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
