import { Injectable } from '@angular/core';
import { todoItem } from './todoItem';

// type todoItem = {
//   id: number;
//   description: string;
//   date: Date;
//   status: boolean;
// };

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  listTodo:todoItem[] = []
  constructor() { }

  generateId(){
    return (this.listTodo.length + 1);
  }

  getData(){
    return this.listTodo;
  }

  addItem(newItem:todoItem):void{
    this.listTodo.push(newItem);
  }

}
