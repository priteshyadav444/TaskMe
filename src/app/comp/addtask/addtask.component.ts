import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  text?: string;
  day?: string;
  reminder?: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;
  @Output() onAddtask:EventEmitter <Task> = new EventEmitter();
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => 
    ( this.showAddTask = value ));
  }

  ngOnInit(): void {
  }
  onSubmit(){

    if(!this.text){
      alert("Please Add a Task");
      return;
    }
  
    const newTask = {
      text : this.text,
      day : this.day,
      reminder : this.reminder
    }
    //clear input

    this.onAddtask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false
  }

}
