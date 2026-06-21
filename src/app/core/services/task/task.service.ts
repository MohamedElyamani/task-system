import { Injectable, signal } from '@angular/core';
import { ITask } from '../../models/ITask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<ITask[]>(this.loadTasks());
  tasksReadonly = this.tasks.asReadonly();

  addTask(task: ITask) {
    this.tasks.update(tasks => [...tasks, task]);
     this.saveTasks();
  }

  updateTask(updatedTask: ITask) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
     this.saveTasks();
  }

  deleteTask(id: string) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
     this.saveTasks();
  }
  saveTasks(): void {
    localStorage.setItem(
      'tasks',
      JSON.stringify(this.tasks())
    );
  }

  loadTasks(): ITask[] {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }

}
