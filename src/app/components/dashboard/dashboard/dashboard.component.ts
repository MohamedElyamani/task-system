import { Component, OnInit } from '@angular/core';
import { StatsCardsComponent } from "../stats-cards/stats-cards.component";
import { TaskTableComponent } from "../task-table/task-table.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [StatsCardsComponent, TaskTableComponent]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
