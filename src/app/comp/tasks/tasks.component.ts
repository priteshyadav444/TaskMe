import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

 @Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {
  tasks : Task[] = []  
 
  constructor(private taskServices: TaskService) { }

  ngOnInit(): void {
    this.taskServices.getTasks().subscribe((taskdata)=>
    this.tasks = taskdata
    )
  }

  deleteTask(task: Task){
    this.taskServices.deleteTask(task).subscribe(()=> 
    (this.tasks = this.tasks.filter( (t) => t.id !== task.id )));
  }
  toggleReminder(task: Task){
    task.reminder = !task.reminder
    this.taskServices.updateTaskRemainder(task).subscribe();
  }
  onAdd(task:Task){
    console.log("Check")
    this.taskServices.addtask(task).subscribe((newtask)=> 
    (this.tasks.push(newtask)));
  }

  
}
