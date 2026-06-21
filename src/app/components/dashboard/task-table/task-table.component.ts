import { Component, inject, Pipe } from '@angular/core';
import { TaskService } from '../../../core/services/task/task.service';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

import { CreateUpdateTaskComponent } from "../../tasks/create-update-task/create-update-task.component";
import { DatePipe } from '@angular/common';
import { ITask } from '../../../core/models/ITask';
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css'],
  imports: [ButtonModule, TableModule, IconFieldModule,InputTextModule, InputIconModule, DialogModule,TagModule, CreateUpdateTaskComponent, DatePipe]
})
export class TaskTableComponent {

 private taskService = inject(TaskService);
  selectedTask: ITask | null = null;
  tasks = this.taskService.tasksReadonly;
  displayDialog = false;

  openDialog(): void {
    this.selectedTask = null;
    this.displayDialog = true;
  }
  closeDialog(){
    this.displayDialog = false;
  }

openEditDialog(task: ITask) {
  this.selectedTask = task;
  this.displayDialog = true;
}
  deleteRow(id: string){
    this.taskService.deleteTask(id);
  }
  toggleStatus(task: ITask) {
  const updatedTask: ITask = {
    ...task,
    status: task.status === 'completed' ? 'pending' : 'completed'
  };

  this.taskService.updateTask(updatedTask);
}
}
