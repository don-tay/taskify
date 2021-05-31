import { Injectable } from '@nestjs/common';
import { Task } from './tasks.model';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }
}
