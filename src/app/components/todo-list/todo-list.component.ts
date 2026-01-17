import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() emitEditTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  
  @Output() emitDeleteTodo : EventEmitter<string> = new EventEmitter<string>()
  @Input() todoArr !: Array<Itodo>

   trackById(index : number, todo : Itodo){
    return todo.todoId
  }

  onEdit(todo : Itodo){
    this.emitEditTodo.emit(todo)
  }

  onRemove(id : string){
      this.emitDeleteTodo.emit(id)
  }
}
