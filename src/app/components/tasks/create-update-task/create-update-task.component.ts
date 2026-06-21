import { Component,  inject, input,  OnChanges,  output,  } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TaskService } from '../../../core/services/task/task.service';
import { ITask } from '../../../core/models/ITask';
import { SelectModule } from 'primeng/select';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { InputTextModule } from 'primeng/inputtext';


@Component({
  selector: 'app-create-update-task',
  templateUrl: './create-update-task.component.html',
  styleUrls: ['./create-update-task.component.css'],
  imports: [SelectModule, ReactiveFormsModule, IconFieldModule,   ButtonModule, TextareaModule,InputTextModule]

})
export class CreateUpdateTaskComponent implements OnChanges {
  task = input<ITask | null>(null);
  close = output<void>();

  private fb = inject(FormBuilder);
  private taskService = inject(TaskService);

 
  form = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    dueDate: [new Date() , Validators.required],
    priority: ['medium', Validators.required],
  });

  ngOnChanges() {
  const task = this.task();

  if (!task) {
    this.form.reset({
      title: '',
      description: '',
      dueDate: new Date(),
      priority: 'medium'
    });
    return;
  }

  this.form.patchValue({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate ? new Date(task.dueDate) : null,
    priority: task.priority
  });
}
  save(): void {

     if (this.form.invalid) return;

  const task: ITask = {
    id: this.task()?.id ?? crypto.randomUUID(),

    title: this.form.value.title!,
    description: this.form.value.description!,
    dueDate: new Date(this.form.value.dueDate!),
    priority: this.form.value.priority!,

    status: this.task()?.status ?? 'pending',
    creationDate: this.task()?.creationDate ?? new Date()
  };

  if (this.task()) {
    this.taskService.updateTask(task);
  } else {
    this.taskService.addTask(task);
  }

  this.close.emit();
  }

}
