import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { todoData } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor(private _snackBar : MatSnackBar) { }

  editTodo !: Itodo

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoData

  getNewTodo(todo : Itodo){
    this.todoArr.push(todo)

    this._snackBar.open('The todoItem Added Successfully !', 'close', {
            verticalPosition : 'top',
            horizontalPosition : 'center',
            duration : 3000
          })
  } 
  getEditTodo(todo: Itodo){
    this.editTodo = todo
  }

  deleteTodo(id : string){
     let getIndex = this.todoArr.findIndex(t => t.todoId === id)
    if(getIndex > -1){
      this.todoArr.splice(getIndex, 1)
    }
    this._snackBar.open('The todoItem Removed Successfully !', 'close', {
            verticalPosition : 'top',
            horizontalPosition : 'center',
            duration : 3000
          })
  }

   getUpdateTodo(todo : Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId)
   console.log(getIndex)
    this.todoArr[getIndex] = todo
    
  }

  

}
