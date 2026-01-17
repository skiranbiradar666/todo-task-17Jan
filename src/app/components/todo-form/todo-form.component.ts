import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() editTodo !: Itodo
  @Input() getEditTodo !: Itodo
  @Output() emitUpdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getEditTodo']['currentValue']){
      // this.isInEditMode = true
      this.todoForm.form.patchValue(changes['getEditTodo']['currentValue'])
    }
  }
  onTodoAdd(){
    let todo : Itodo = {
     ...this.todoForm.value,
      todoId : Date.now().toString() 
    }
    console.log(todo)
    this.todoForm.reset()
    this.emitNewTodo.emit(todo)
  }

  onTodoUpdate(){
    let Update : Itodo = {
      ...this.todoForm.value, todoId : this.getEditTodo.todoId
    }
    this.emitUpdateTodo.emit(Update)
  }

}
