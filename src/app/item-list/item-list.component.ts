import { Component } from '@angular/core';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
handleAdd() {
  console.log(this.myInput);
  this.myItemArray.push(this.myInput);
  this.myInput = "";
}

  myItemArray: string[] = ['apple', 'banana', 'orange'];
  myInput: string = '';

}
