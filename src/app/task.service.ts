import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private base = '/api/tasks';

  constructor(
    private http: HttpClient
  ) { }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.base);
  }

  addTask(task:Task): Observable<Task>{
    return this.http.post<Task>(this.base, task);
  }

  updateTask(id:string, task:Task): Observable<Task>{
    return this.http.put<Task>(`${this.base}/${id}`, task);
  }

  deleteTask(task:Task): Observable<Task> {
    return this.http.delete<Task>(`${this.base}/${task._id}`);
  }

}
