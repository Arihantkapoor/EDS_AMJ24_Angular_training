import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks:string[] = [];


  newtask: string;

  isDisabled: boolean = true;

  constructor(){
    if (localStorage.getItem('tasks')) {
      let storedTasks = localStorage.getItem('tasks');
      if (storedTasks !== null) {
        this.tasks=[...JSON.parse(storedTasks)]
 
      }
    }
  }

  AddTask() {
    const isWhitespaceString = !this.newtask.replace(/\s/g, '').length
    if (isWhitespaceString) {
      alert("Empty string");
      this.newtask = '';
    }
    else {
 
      //   this.tasks.push(this.newtask);
      // console.log(this.tasks);
      // this.newtask = '';
      if (localStorage.getItem('tasks')) {
        let storedTasks = localStorage.getItem('tasks');
        console.log(storedTasks);
        if (storedTasks !== null) {
          this.tasks=[...JSON.parse(storedTasks),this.newtask];
 
        }
      }
      else {
        this.tasks = [this.newtask];
        // this.tasks.push(this.newtask);
 
      }
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.newtask = '';
    }
  }

    removeTask(index: number) {
      this.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks)); // update tasks in localStorage
   
      console.log(this.tasks);
    }
   
    updateTask(data: number) {
      console.log(this.tasks[data]);
   
      let value = prompt("enter updated task value", this.tasks[data]);
      if (value != null) {
        this.tasks[data] = value;
        localStorage.setItem('tasks', JSON.stringify(this.tasks)); // update tasks in localStorage
      }
    }

}
