import { Component, computed, inject, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task/task.service';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.css']
})
export class StatsCardsComponent  {
    private taskService = inject(TaskService);
    tasks = this.taskService.tasksReadonly;
    taskInfo = computed(() => {

    const tasks = this.tasks();

    return [
      {
        title: 'Total Tasks',
        length: tasks.length
      },
      {
        title: 'Completed Tasks',
        length: tasks.filter(t => t.status === 'completed').length
      },
      {
        title: 'Pending Tasks',
        length: tasks.filter(t => t.status === 'pending').length
      }
    ];
  });
}
