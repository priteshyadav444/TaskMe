import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})

export class TaskService {
  private apiUrl = 'http://localhost:5000/task';
  constructor(private http: HttpClient) {}

 
  getTasks(): Observable<Task[]> {
    const data = this.http.get<Task[]>(this.apiUrl);
    return data;
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskRemainder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task,httpOptions);
  }
  addtask(task:Task): Observable<Task>{
    return this.http.post(this.apiUrl,task,httpOptions);
  }
}
