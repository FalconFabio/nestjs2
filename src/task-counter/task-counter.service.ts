import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class TasksCounterService {
  private readonly redis: Redis;

  constructor() {
    this.redis = new Redis();
  }

  async countTasks(todos): Promise<number> {
    console.log('todos = ', todos.length);
    return todos.length;
  }
}
