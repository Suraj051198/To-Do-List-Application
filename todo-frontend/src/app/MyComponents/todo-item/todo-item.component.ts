import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  @Output() todoEdit: EventEmitter<Todo> = new EventEmitter(); // Emit the updated todo

  isEditing: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Delete has been triggered');
  }

  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }

  // Start editing
  editTodo() {
    this.isEditing = true;
  }

  // Save the edited todo
  saveEdit() {
    this.isEditing = false;
    this.todoEdit.emit(this.todo); // Emit the updated todo object
  }

  // Cancel the editing
  cancelEdit() {
    this.isEditing = false;
  }
}
