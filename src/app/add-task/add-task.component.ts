import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
// import { NgForm } from '@angular/forms';  //used for clearing form
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { CookieService } from 'ngx-cookie';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  newTask:Task = new Task();
  owner_id:string;


  constructor(
    private router:Router,
    private taskService:TaskService,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.owner_id = this.cookieService.get('userID');
  }

  addTask(event:Event){
    event.preventDefault();
    // console.log(`task ${this.newTask.task} added successfully; priority level ${this.newTask.priority}`);

    this.newTask.owner_id = this.owner_id;
    
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
