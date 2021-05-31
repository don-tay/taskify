import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private readonly tasks: Task[] = [];

  getAllTasks() {
    return this.tasks;
  }

  createTask(body: CreateTaskDto) {
    const { title, description } = body;

    const task: Task = {
      id: uuidv1(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
