import { Todo } from './interfaces/todo.interface';
import { Controller } from '@nestjs/common';
import { MessagePattern, ClientProxy, Transport } from '@nestjs/microservices';
import { TasksCounterService } from './task-counter.service';

@Controller()
export class TodoCountController {
  constructor(private readonly tasksCounterService: TasksCounterService) {}

  @MessagePattern('getTodoCount')
  async getTodoCount(todos: Todo[]): Promise<number> {
    return this.tasksCounterService.countTasks(todos);
  }
}
