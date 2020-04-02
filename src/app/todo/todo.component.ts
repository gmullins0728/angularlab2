import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  template: `<input [(ngModel)]="newTodo" #ctrl="ngModel" required>`
})
export class TodoComponent implements OnInit {
  title = 'TODO List';
  pTag = 'A place to store your todos';

  todos: Todo[] = [
    { task: 'do laundry', completed: false },
    { task: 'take out trash', completed: false },
    { task: 'groom dogs', completed: true },
    { task: 'try to pet cat', completed: false },
    { task: 'feed fish', completed: true },
    { task: 'play video games', completed: true }
  ];

  

  newTask = '';
  addTask(newTask) {
    this.todos.push({
      task: newTask,
      completed: false
    });
    this.newTask='';
  }

  completedTask(taskCompleted) {
    taskCompleted.completed = !taskCompleted.completed;
  }
  

  removeTask(index) {
    for (let i = 0; i < this.todos.length; i--) {
      if(this.todos[i].task) {
        this.todos.splice(i, 1);
        this.todos.splice(index, 1);
      }
    }
  }

  // filter($event){
  //   let reg = $event.target.value;
  //   this.todos = this.todos.filter(x => return x.toLowerCase().indexOf(reg.toLowerCase()) != -1);
  // }

  ngOnInit(): void {
  }

}

