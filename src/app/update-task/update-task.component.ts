import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  tasks:Array<Task> = [];
  updatedTask:Task = new Task();

  constructor(
    private taskService:TaskService,
    private route:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit() {
    this.taskService.getTasks().subscribe( tasks => {
      this.tasks = tasks;


      this.route.params.subscribe( param =>{
        console.log('param id:', param.id)

        for (let idx=0; idx < this.tasks.length; idx++) {

          if (this.tasks[idx]._id == param.id) {
            this.updatedTask = this.tasks[idx];
            console.log('found matching task:', this.updatedTask.task)
            break;
          }
        }

      });
    });
  }

  updateTask(){
    console.log('updating task', this.updatedTask)

    this.taskService.updateTask(this.updatedTask._id, this.updatedTask).subscribe(task => {
      console.log('from api...updated task', task);

      this.taskService.getTasks().subscribe( tasks => {
        this.tasks = tasks;
      });

      this.router.navigateByUrl('tasks');

    });
    

  }

  return(){
    this.router.navigateByUrl('tasks');

  }


}
