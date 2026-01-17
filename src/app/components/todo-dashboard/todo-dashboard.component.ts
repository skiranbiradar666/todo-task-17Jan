import { Component, OnInit } from '@angular/core';
import { todoData } from 'src/app/const/todo';
import { Itodo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor() { }

  editTodo !: Itodo

  ngOnInit(): void {
  }

  todoArr : Array<Itodo> = todoData

  getNewTodo(todo : Itodo){
    this.todoArr.push(todo)
  } 
  getEditTodo(todo: Itodo){
    this.editTodo = todo
  }

  deleteTodo(id : string){
     let getIndex = this.todoArr.findIndex(t => t.todoId === id)
    if(getIndex > -1){
      this.todoArr.splice(getIndex, 1)
    }
  }

   getUpdateTodo(todo : Itodo){
    let getIndex = this.todoArr.findIndex(t => t.todoId === todo.todoId)
   
    this.todoArr[getIndex] = todo
    
  }

  

}
