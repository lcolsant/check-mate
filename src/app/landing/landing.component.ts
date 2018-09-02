import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { CookieService } from 'ngx-cookie';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  tasks:Array<Task> = [];
  user_name;
  owner_id:string;
  tasks_count:number;
  filter: Task = new Task();

    
  
  constructor(
    private router: Router,
    private TaskService: TaskService,
    private AuthService: AuthService,
    private cookieService: CookieService,
  ) { }

  ngOnInit() {
    this.owner_id = this.cookieService.get('userID');
    this.user_name = this.cookieService.get('user_name');
    this.TaskService.getTasks().subscribe(tasks => {
      console.log('retrieving tasks from db...');
      this.tasks = tasks;
      this.tasks = this.tasks.filter(task => task.owner_id == this.owner_id)
      this.tasks_count = this.tasks.length;
    });
  }

  signOut(){
    this.AuthService.logout().subscribe(() =>{
      console.log('User logged out succesfully');
      this.router.navigateByUrl('');
    })

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
