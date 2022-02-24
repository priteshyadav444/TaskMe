import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() title?: string | undefined;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router:Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => 
    ( this.showAddTask = value ));
  }

  ngOnInit(): void { }
  addTask() {
   this.uiService.toggleAddTask();
  }
  hasRoute(route:string){
    return this.router.url == route;
  }
}
