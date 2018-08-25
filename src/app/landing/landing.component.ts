import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  tasks:Array<Task> = [];

  // tasks = [
  //   {
  //     _id:'1',
  //     task:'Take out the garbage',
  //     status:'not done',
  //     priority:3,
  //   },
  //   {
  //     _id:'2',
  //     task:'Change air filters',
  //     status:'not done',
  //     priority:5,
  //   },
  //   {
  //     _id:'3',
  //     task:'spray lawn',
  //     status:'not done',
  //     priority:4,
  //   },
  // ]
    
  
  constructor(
    private router: Router,
    private TaskService: TaskService,
  ) { }

  ngOnInit() {
    this.TaskService.getTasks().subscribe(tasks => {
      console.log('retrieving tasks from db...');
      this.tasks = tasks;
    });
  }

  signOut(){
    console.log('exit works');
    this.router.navigateByUrl('');

  }

  addTask(){
    this.router.navigateByUrl('tasks/addTask');

  }

  deleteTask(task:Task){
    this.TaskService.deleteTask(task).subscribe(deletedTask => {
      console.log(deletedTask,' deleted from db.');
      this.tasks = this.tasks.filter(task => task._id !== deletedTask._id);
    })
  }

}
