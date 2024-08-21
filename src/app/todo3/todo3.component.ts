import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo3',
  templateUrl: './todo3.component.html',
  styleUrls: ['./todo3.component.css']
})
export class Todo3Component implements OnInit {
  todoData = [];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.getDataFromService();
  }

  getDataFromService() {
    this.todoData = this.todoService.getData();
    // console.log(this.todoData);
  }

  handleAdd(){
    this.todoService.addItem({description:"do This", id:this.todoService.generateId(),date: (new Date()),status: false})
  }


}
