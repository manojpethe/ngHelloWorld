import { Component,Input } from '@angular/core';
import { todoItem } from '../../services/todoItem'

@Component({
  selector: 'show-todo-item',
  templateUrl: './show-todo-item.component.html',
  styleUrls: ['./show-todo-item.component.css']
})
export class ShowTodoItemComponent {
  @Input() todoItem: todoItem;

}
