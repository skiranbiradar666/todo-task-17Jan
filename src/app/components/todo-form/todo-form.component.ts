import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {

  constructor(private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
  }

  isInEditMode = false

  @ViewChild('todoForm') todoForm !: NgForm
  @Output() emitNewTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Input() editTodo !: Itodo
  
  @Output() emitUpdateTodo : EventEmitter<Itodo> = new EventEmitter<Itodo>()
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['editTodo']['currentValue']){
      this.isInEditMode = true
      this.todoForm.form.patchValue(changes['editTodo']['currentValue'])
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
      ...this.todoForm.value, todoId : this.editTodo.todoId
    }
    this.emitUpdateTodo.emit(Update)
    this.isInEditMode = false
    this.todoForm.reset()

    this._snackBar.open('The todoItem is Updated Successfully !', 'close', {
            verticalPosition : 'top',
            horizontalPosition : 'center',
            duration : 3000
          })
  }

}
