export interface ITask {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'completed';
  creationDate: Date;
  dueDate: Date;
  priority: string
}
