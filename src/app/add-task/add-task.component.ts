import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
// import { NgForm } from '@angular/forms';  //used for clearing form
import { Router } from '@angular/router';
import { TaskService } from '../task.service';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask:Task = new Task();
  // Task = {
  //   task:'',
  //   priority:'',
  //   status:'not done',

  // }


  constructor(
    private router:Router,
    private taskService:TaskService,
  ) { }

  ngOnInit() {
  }

  addTask(event:Event){
    event.preventDefault();
    console.log(`task ${this.newTask.task} added successfully; priority level ${this.newTask.priority}`);

    this.taskService.addTask(this.newTask).subscribe(task => {
      console.log('task from api: ', task);
      this.router.navigateByUrl('tasks');
    });


    //formData.reset();

  }

  return(){
    this.router.navigateByUrl('tasks');

  }

}
